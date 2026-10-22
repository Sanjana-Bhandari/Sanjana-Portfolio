import { FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import { siteConfig, whatsappLink } from '../config/siteConfig';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle
        eyebrow="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind or just want to say hello? Send me a message."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-6">
          <h3 className="font-display text-2xl font-semibold text-white">Get in touch</h3>
          <p className="text-slate-400">
            Fill in the form and your message will reach me directly. You can also message me on WhatsApp for a
            quicker reply.
          </p>

          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-accent-400"
            >
              <FaEnvelope className="text-accent-400" /> {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-accent-400"
            >
              <FaGithub className="text-accent-400" /> github.com/Sanjana-Bhandari
            </a>
          </div>

          <Button href={whatsappLink()} variant="whatsapp" icon={FaWhatsapp} external>
            Message on WhatsApp
          </Button>

          <SocialLinks className="pt-2" />
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
