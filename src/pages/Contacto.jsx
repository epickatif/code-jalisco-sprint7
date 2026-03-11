import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'informacion'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'El teléfono debe tener 10 dígitos';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, simulate submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          interest: 'informacion'
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-primary-600" />,
      title: 'Dirección',
      content: 'Av. Revolución 1500, Col. Olímpica',
      content2: 'Guadalajara, Jalisco, México C.P. 44430'
    },
    {
      icon: <FaPhone className="text-3xl text-primary-600" />,
      title: 'Teléfono',
      content: '+52 (33) 1234-5678',
      content2: '+52 (33) 8765-4321'
    },
    {
      icon: <FaEnvelope className="text-3xl text-primary-600" />,
      title: 'Correo electrónico',
      content: 'info@codejalisco.edu.mx',
      content2: 'admisiones@codejalisco.edu.mx'
    },
    {
      icon: <FaClock className="text-3xl text-primary-600" />,
      title: 'Horario de atención',
      content: 'Lunes - Viernes: 7:00 AM - 8:00 PM',
      content2: 'Sábado: 8:00 AM - 2:00 PM'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Estamos aquí para responder todas tus preguntas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="font-display font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{info.content}</p>
                {info.content2 && (
                  <p className="text-gray-600 text-sm">{info.content2}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Envíanos un mensaje
              </h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-green-600">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="33 1234 5678"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Interest */}
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Motivo de contacto
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="informacion">Información general</option>
                      <option value="admisiones">Proceso de admisión</option>
                      <option value="becas">Becas y apoyos</option>
                      <option value="visita">Agendar visita</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder="Asunto de tu mensaje"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Encuéntranos
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <FaMapMarkerAlt className="text-6xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">
                    Av. Revolución 1500, Col. Olímpica
                  </p>
                  <p className="text-gray-600">
                    Guadalajara, Jalisco, México
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block mt-4"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  ¿Prefieres visitarnos?
                </h3>
                <p className="text-gray-600 mb-6">
                  Te invitamos a conocer nuestras instalaciones y hablar directamente con nuestro equipo. 
                  Agenda una cita para recibir un tour personalizado.
                </p>
                <a href="/admisiones" className="btn-outline w-full text-center block">
                  Agendar visita
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;

