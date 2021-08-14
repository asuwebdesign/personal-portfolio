// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import components
import ProjectCard from '../../components/project-card'

// Import data
import { projects } from '../../data/projects'

// Render component
const Projects = props => {
  return (
    <div className="work">
      <Wrapper>
        <div className="work__list">
          {projects.map((project, key) => {
            return <ProjectCard key={key} project={project} />
          })}
        </div>
      </Wrapper>
    </div>
  )
}

export default Projects
