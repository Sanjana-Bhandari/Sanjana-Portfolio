import { siteConfig } from '../config/siteConfig';

// Replace `github` / `live` with the exact repo and deployed links of each project.
export const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'A modern animated portfolio with a MERN backend that stores contact form messages in MongoDB.',
    tech: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
    github: siteConfig.social.github,
    live: null,
  },
  {
    title: 'FitClub Website',
    description:
      'A fitness club website with plans, trainers and membership enquiries, built as a full MERN app.',
    tech: ['React', 'CSS', 'Node.js', 'Express', 'MongoDB'],
    github: siteConfig.social.github,
    live: null,
  },
  {
    title: 'Nepal Khabar Daily',
    description:
      'A news website with category-wise articles and a clean, responsive reading experience.',
    tech: ['HTML', 'CSS', 'React'],
    github: siteConfig.social.github,
    live: null,
  },
  {
    title: 'Consultancy Website',
    description:
      'A responsive business consultancy website with services, about and enquiry sections.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: siteConfig.social.github,
    live: null,
  },
  {
    title: 'Beauty Parlour Management System',
    description:
      'A management interface for a beauty parlour covering services, bookings and customer details.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: siteConfig.social.github,
    live: null,
  },
];
