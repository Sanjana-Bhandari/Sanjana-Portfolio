import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { siteConfig } from '../config/siteConfig';

const items = [
  { label: 'Instagram', icon: FaInstagram, href: siteConfig.social.instagram },
  { label: 'Facebook', icon: FaFacebookF, href: siteConfig.social.facebook },
  { label: 'GitHub', icon: FaGithub, href: siteConfig.social.github },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: siteConfig.social.linkedin },
  { label: 'Email', icon: FaEnvelope, href: `mailto:${siteConfig.email}` },
];

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <motion.a
            href={href}
            aria-label={label}
            title={label}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.1 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 transition-colors hover:border-accent-400 hover:text-accent-400"
          >
            <Icon />
          </motion.a>
        </li>
      ))}
    </ul>
  );
}
