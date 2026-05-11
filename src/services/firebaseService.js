import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';

// Configuración de Firebase - Proyecto CODE Jalisco
const firebaseConfig = {
  apiKey: "AIzaSyCoh9X-bMmOg93YvAG8UfFRktoVTymY1QQ",
  authDomain: "code-jalisco-86c56.firebaseapp.com",
  projectId: "code-jalisco-86c56",
  storageBucket: "code-jalisco-86c56.firebasestorage.app",
  messagingSenderId: "657468079675",
  appId: "1:657468079675:web:d26a3325bc57e57205e61e"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Guarda una pre-inscripción en Firestore
 */
export const guardarPreInscripcion = async (datos) => {
  try {
    const docRef = await addDoc(collection(db, 'preinscripciones'), {
      ...datos,
      fechaRegistro: serverTimestamp(),
      estado: 'pendiente'
    });
    
    console.log('Pre-inscripción guardada en BD con ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error al guardar en Firebase:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Obtiene todas las pre-inscripciones
 */
export const obtenerPreInscripciones = async () => {
  try {
    const q = query(collection(db, 'preinscripciones'), orderBy('fechaRegistro', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const inscripciones = [];
    querySnapshot.forEach((doc) => {
      inscripciones.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, data: inscripciones };
  } catch (error) {
    console.error('Error al obtener inscripciones:', error);
    return { success: false, error: error.message, data: [] };
  }
};

/**
 * Guarda un mensaje de contacto en Firestore
 */
export const guardarMensajeContacto = async (datos) => {
  try {
    const docRef = await addDoc(collection(db, 'mensajes_contacto'), {
      ...datos,
      fechaRegistro: serverTimestamp(),
      leido: false
    });
    
    console.log('Mensaje de contacto guardado en BD con ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error al guardar mensaje:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Obtiene todos los mensajes de contacto
 */
export const obtenerMensajesContacto = async () => {
  try {
    const q = query(collection(db, 'mensajes_contacto'), orderBy('fechaRegistro', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const mensajes = [];
    querySnapshot.forEach((doc) => {
      mensajes.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return { success: true, data: mensajes };
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
    return { success: false, error: error.message, data: [] };
  }
};
