import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../config/siteConfig';

// Floating WhatsApp chat button, fixed at bottom-right on every page.
export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.12 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-xl shadow-[#25D366]/40"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <FaWhatsapp className="relative" />
    </motion.a>
  );
}
