import { useEffect, useState, useRef } from 'react';
import useCountUp from '../hooks/useCountUp';

function StatCard({ icon: Icon, value, label, suffix = '', color = 'blue' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(value, 2500, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
    yellow: 'from-yellow-500 to-yellow-600'
  };

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-4 rounded-lg bg-gradient-to-br ${colorClasses[color]} text-white`}>
          <Icon className="text-3xl" />
        </div>
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">
        {count.toLocaleString('es-MX')}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

export default StatCard;
