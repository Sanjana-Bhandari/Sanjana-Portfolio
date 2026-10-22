// Single place to edit all personal details and links.
export const siteConfig = {
  name: 'Sanjana',
  fullName: 'Sanjana Kumari',
  role: 'MERN Stack Developer',
  email: 'kumarisanjana.work@gmail.com',
  // WhatsApp number with country code, digits only (no + or spaces). Example for India: 91********
  whatsappNumber: '9860406487',
  whatsappMessage: 'Hi Sanjana, I visited your portfolio and I would like to connect.',
  social: {
    instagram: 'https://www.instagram.com/sanjana.web_b2',
    facebook: 'https://www.facebook.com/',
    github: 'https://github.com/Sanjana-Bhandari',
    linkedin: 'https://www.linkedin.com/in/sanjana-kumari-9930ab3a2/?isSelfProfile=true'
  },
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const whatsappLink = () =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
