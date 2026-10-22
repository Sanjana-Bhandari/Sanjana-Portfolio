import { motion } from 'framer-motion';

export default function SkillBadge({ skill, index = 0 }) {
  const { name, icon: Icon, color } = skill;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="glass flex flex-col items-center gap-3 p-6 transition-shadow hover:shadow-xl hover:shadow-brand-600/20"
    >
      <Icon className="text-5xl" style={{ color }} />
      <span className="text-sm font-medium text-white">{name}</span>
    </motion.div>
  );
}
