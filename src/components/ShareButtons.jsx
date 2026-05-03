import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaEnvelope, FaLink } from 'react-icons/fa';
import { useState } from 'react';

function ShareButtons({ url, title, description }) {
  const [copied, setCopied] = useState(false);
  
  const fullUrl = url || window.location.href;
  const shareTitle = title || document.title;
  const shareText = description || '';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(shareTitle)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + '\n\n' + fullUrl)}`
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Compartir:</span>
      
      <button
        onClick={() => handleShare('facebook')}
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        aria-label="Compartir en Facebook"
      >
        <FaFacebook />
        <span className="hidden sm:inline">Facebook</span>
      </button>

      <button
        onClick={() => handleShare('twitter')}
        className="flex items-center gap-2 px-3 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm"
        aria-label="Compartir en Twitter"
      >
        <FaTwitter />
        <span className="hidden sm:inline">Twitter</span>
      </button>

      <button
        onClick={() => handleShare('whatsapp')}
        className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
        aria-label="Compartir en WhatsApp"
      >
        <FaWhatsapp />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>

      <button
        onClick={() => handleShare('linkedin')}
        className="flex items-center gap-2 px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm"
        aria-label="Compartir en LinkedIn"
      >
        <FaLinkedin />
        <span className="hidden sm:inline">LinkedIn</span>
      </button>

      <button
        onClick={() => handleShare('email')}
        className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
        aria-label="Compartir por Email"
      >
        <FaEnvelope />
        <span className="hidden sm:inline">Email</span>
      </button>

      <button
        onClick={handleCopyLink}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
          copied
            ? 'bg-green-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Copiar enlace"
      >
        <FaLink />
        <span className="hidden sm:inline">{copied ? '¡Copiado!' : 'Copiar link'}</span>
      </button>
    </div>
  );
}

export default ShareButtons;
