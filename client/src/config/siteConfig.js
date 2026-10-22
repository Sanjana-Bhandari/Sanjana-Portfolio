// Single place to edit all personal details and links.
export const siteConfig = {
  name: 'Sanjana',
  fullName: 'Sanjana Kumari',
  role: 'MERN Stack Developer',
  email: 'kumarisanjana.work@gmail.com',
  // WhatsApp number with country code, digits only (no + or spaces). Example for India: 919876543210
  whatsappNumber: '91XXXXXXXXXX',
  whatsappMessage: 'Hi Sanjana, I visited your portfolio and I would like to connect.',
  social: {
    instagram: 'https://www.instagram.com',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com/Sanjana-Bhandari',
    linkedin: 'https://www.linkedin.com',
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
