import { useEffect, useState, useRef } from 'react';

/**
 * Hook personalizado para animar contadores numéricos
 * @param {number} end - Valor final del contador
 * @param {number} duration - Duración de la animación en ms (default: 2000)
 * @param {boolean} start - Trigger para iniciar la animación
 * @returns {number} - Valor actual del contador
 */
function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const startTime = Date.now();
    startTimeRef.current = startTime;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOut * end);
      
      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
}

export default useCountUp;
