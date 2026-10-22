import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks, siteConfig } from '../config/siteConfig';
import useActiveSection from '../hooks/useActiveSection';

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-900/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="font-display text-xl font-bold text-white">
          {siteConfig.name}
          <span className="text-accent-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative text-sm font-medium transition-colors hover:text-white ${
                  active === id ? 'text-white' : 'text-slate-400'
                }`}
              >
                {label}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-400"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-ink-800 md:hidden"
          >
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3 text-sm font-medium ${
                    active === id ? 'text-accent-400' : 'text-slate-300'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
