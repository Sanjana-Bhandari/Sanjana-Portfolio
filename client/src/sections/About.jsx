import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

const stats = [
  { value: '5+', label: 'Projects Completed' },
  { value: '10', label: 'Technologies' },
  { value: 'MERN', label: 'Full Stack' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle eyebrow="About Me" title="Who I Am" />

      <div className="grid items-center gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="leading-relaxed text-slate-300">
            I'm Sanjana, a web developer who enjoys turning ideas into clean, fast and good-looking websites. I
            work with HTML, CSS, JavaScript, Tailwind CSS and Bootstrap on the frontend, and with Node.js,
            Express.js and MongoDB on the backend.
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            I have built a personal portfolio, a consultancy website, a beauty parlour management system, a
            fitness club website and a news website. I care about reusable components, readable code and smooth
            user experience, and I'm always learning something new.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 gap-4 md:col-span-2">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="glass p-4 text-center">
                <p className="gradient-text font-display text-2xl font-bold">{s.value}</p>
                <p className="mt-1 text-xs text-slate-400">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
