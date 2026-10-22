import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        eyebrow="Skills"
        title="Technologies I Work With"
        subtitle="The tools and technologies I use to build complete web applications."
      />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill, i) => (
          <SkillBadge key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
