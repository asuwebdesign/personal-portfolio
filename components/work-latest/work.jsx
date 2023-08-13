'use client'

import ProjectCard from '@/components/project-card/project-card'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="work-latest" className="work work--latest">
      <div className="wrapper">
        <h1 className="work__title">Selected projects</h1>
        <div className="work__list">
          {projects.slice(0, 3).map((project, key) => {
            return <ProjectCard key={key} project={project} />
          })}
        </div>
      </div>
    </section>
  )
}
