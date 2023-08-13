'use client'

import ProjectCard from '@/components/project-card/project-card'
import { projects } from '@/data/projects'
import CardCover from '@/public/images/cards/card-hwy55.png'

export default function Projects(props) {
  return (
    <div className="work">
      <div className="wrapper">
        <div className="work__list">
          {projects.map((project, key) => {
            return <ProjectCard key={key} project={project} poster={CardCover} />
          })}
        </div>
      </div>
    </div>
  )
}