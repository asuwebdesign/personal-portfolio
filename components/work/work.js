// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import components
import ProjectCard from '../../components/project-card'

// Import data
import { projects } from '../../data/projects'

// Import covers
import CardCover from '../../public/images/cards/card-hwy55.png'

// Render component
const Projects = props => {
  return (
    <div className="work">
      <Wrapper>
        <div className="work__list">
          {projects.map((project, key) => {
            return <ProjectCard key={key} project={project} poster={CardCover} />
          })}
        </div>
      </Wrapper>
    </div>
  )
}

export default Projects
