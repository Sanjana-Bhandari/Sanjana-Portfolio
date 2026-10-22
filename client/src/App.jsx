import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
