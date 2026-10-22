import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, tech, github, live } = project;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass group flex flex-col p-6 transition-shadow hover:shadow-2xl hover:shadow-brand-600/20"
    >
      <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand-500 to-accent-400 transition-all group-hover:w-24" />
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li key={t} className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-400">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4 text-sm font-medium">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-300 transition-colors hover:text-accent-400"
        >
          <FaGithub /> Code
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 transition-colors hover:text-accent-400"
          >
            <FaExternalLinkAlt className="text-xs" /> Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
