import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import AnimatedBackground from '../components/AnimatedBackground';
import Typewriter from '../components/Typewriter';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import { siteConfig, whatsappLink } from '../config/siteConfig';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } };

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <AnimatedBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-center sm:px-8"
      >
        <motion.span
          variants={item}
          className="glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-slate-200"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to work & freelance projects
        </motion.span>

        <motion.h1 variants={item} className="mt-6 font-display text-4xl font-extrabold text-white sm:text-6xl lg:text-7xl">
          Hi, I'm <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-5 font-display text-xl font-semibold text-slate-200 sm:text-3xl">
          I am a{' '}
          <Typewriter words={['MERN Stack Developer', 'React Developer', 'Frontend Designer', 'Backend Builder']} />
        </motion.p>

        <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-slate-400">
          I build fast, responsive and beautiful web applications using MongoDB, Express.js, React and Node.js.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects">View My Work</Button>
          <Button href={whatsappLink()} variant="whatsapp" icon={FaWhatsapp} external>
            Chat on WhatsApp
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex justify-center">
          <SocialLinks />
        </motion.div>

        <motion.a
          variants={item}
          href="#about"
          aria-label="Scroll down"
          className="mt-12 inline-block text-2xl text-slate-400 hover:text-accent-400"
        >
          <motion.span animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="block">
            <HiArrowDown />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
