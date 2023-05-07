// ============================================================================
// Import layouts
// ============================================================================
import Wrapper from '../../layouts/wrapper'


// ============================================================================
// Import components
// ============================================================================
import ProjectCard from '../../components/project-card'


// ============================================================================
// Import data
// ============================================================================
import { projects } from '../../data/projects'


// ============================================================================
// Render component
// ============================================================================
const Projects = () => {
  return (
    <section id="work-latest" className="work work--latest">
      <Wrapper>
        <h1 className="work__title">Selected projects</h1>
        <div className="work__list">
          {projects.slice(0, 3).map((project, key) => {
            return <ProjectCard key={key} project={project} />
          })}
        </div>
      </Wrapper>
    </section>
  )
}

export default Projects
