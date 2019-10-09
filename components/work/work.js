// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import styles
import './work.scss'

// Render component
const Projects = props => {
  return (
    <section className="work">
      <Wrapper>
        <div className="work__list">
          <article className="work__project">
            <Link href="/projects/sample">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img src="https://source.unsplash.com/random/400x600" alt="" />
                </div>
                <div className="work__project-client">Red Hat</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/sample">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img src="https://source.unsplash.com/random/400x600" alt="" />
                </div>
                <div className="work__project-client">Red Hat</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/sample">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img src="https://source.unsplash.com/random/400x600" alt="" />
                </div>
                <div className="work__project-client">Red Hat</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/sample">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img src="https://source.unsplash.com/random/400x600" alt="" />
                </div>
                <div className="work__project-client">Red Hat</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/sample">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img src="https://source.unsplash.com/random/400x600" alt="" />
                </div>
                <div className="work__project-client">Red Hat</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/sample">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img src="https://source.unsplash.com/random/400x600" alt="" />
                </div>
                <div className="work__project-client">Red Hat</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
        </div>

        <a href="#">See More Work</a>
      </Wrapper>
    </section>
  )
}

export default Projects
