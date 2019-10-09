// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import elements
import Image from '../../elements/image'

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
                  <Image src="https://source.unsplash.com/collection/190727" />
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
                  <Image src="https://source.unsplash.com/collection/190727" />
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
                  <Image src="https://source.unsplash.com/collection/190727" />
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
                  <Image src="https://source.unsplash.com/collection/190727" />
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
                  <Image src="https://source.unsplash.com/collection/190727" />
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
                  <Image src="https://source.unsplash.com/collection/190727" />
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
