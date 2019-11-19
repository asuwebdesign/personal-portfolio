// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import elements
import Image from '../../elements/image'

// Render component
const Projects = props => {
  return (
    <section id="work-latest" className="work">
      <Wrapper>
        <h1 className="work__title">Selected Work</h1>
        <div className="work__list">
          <article className="work__project">
            <Link href="/projects/atlantic-bt">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <Image src={require('../../public/images/cards/card-atlanticbt.jpg')} alt="Atlantic BT cover" />
                </div>
                <div className="work__project-client">Atlantic BT</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/hwy55">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <Image src={require('../../public/images/cards/card-hwy55.jpg')} alt="Hwy55 cover" />
                </div>
                <div className="work__project-client">{'Hwy 55'}</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/university-wisconsin">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <Image src={require('../../public/images/cards/card-wisconsin.jpg')} alt="University of Wisconsin cover" />
                </div>
                <div className="work__project-client">University of Wisconsin</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
        </div>
      </Wrapper>
    </section>
  )
}

export default Projects
