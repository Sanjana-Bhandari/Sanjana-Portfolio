import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50',
  outline: 'border border-white/20 text-white hover:border-accent-400 hover:text-accent-400',
  whatsapp: 'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30',
};

// Renders <a> when `href` is given, otherwise <button>.
export default function Button({
  children,
  href,
  variant = 'primary',
  icon: Icon,
  className = '',
  external = false,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-shadow disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;
  const content = (
    <>
      {Icon && <Icon className="text-lg" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button className={classes} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} {...props}>
      {content}
    </motion.button>
  );
}
