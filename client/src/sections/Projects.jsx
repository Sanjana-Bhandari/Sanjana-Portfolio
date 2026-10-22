import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        eyebrow="Projects"
        title="Things I've Built"
        subtitle="A selection of websites and applications I have completed."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
