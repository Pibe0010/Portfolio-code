import { MainLayout } from '../Layout/MainLayout.jsx';
import { ProjectCard } from '../components/ui/ProjectCard.jsx';
import { getProjects } from '../data/index.js';
import './ProyectsPage.css';

export const ProyectsPage = () => {
  const projects = getProjects();

  return (
    <MainLayout>
      <h1 className="title-proyect">Proyectos</h1>
      <section className="container-proyects">
        <article className="proyects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </article>
      </section>
    </MainLayout>
  );
};

export default ProyectsPage;