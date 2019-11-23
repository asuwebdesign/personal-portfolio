// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Render component
const Projects = props => {
  return (
    <section className="work">
      <Wrapper>
        <div className="work__list">
          <article className="work__project">
            <Link href="/projects/atlantic-bt">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img
                    srcSet={require('../../public/images/cards/card-atlanticbt.jpg?resize').srcSet}
                    src={require('../../public/images/cards/card-atlanticbt.jpg?resize').src}
                    alt=""
                    loading="lazy"
                  />
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
                  <img
                    srcSet={require('../../public/images/cards/card-hwy55.jpg?resize').srcSet}
                    src={require('../../public/images/cards/card-hwy55.jpg?resize').src}
                    alt=""
                    loading="lazy"
                  />
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
                  <img
                    srcSet={require('../../public/images/cards/card-wisconsin.jpg?resize').srcSet}
                    src={require('../../public/images/cards/card-wisconsin.jpg?resize').src}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="work__project-client">University of Wisconsin</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/nc-courts">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img
                    srcSet={require('../../public/images/cards/card-nc-courts.jpg?resize').srcSet}
                    src={require('../../public/images/cards/card-nc-courts.jpg?resize').src}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="work__project-client">NC Courts</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/nc-gov">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img
                    srcSet={require('../../public/images/cards/card-nc-gov.jpg?resize').srcSet}
                    src={require('../../public/images/cards/card-nc-gov.jpg?resize').src}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="work__project-client">NC Gov</div>
                <h1 className="work__project-title">Engaging worldwide gamers through branding and marketing.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/redhat">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img
                    srcSet={require('../../public/images/cards/card-redhat.jpg?resize').srcSet}
                    src={require('../../public/images/cards/card-redhat.jpg?resize').src}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="work__project-client">Red Hat</div>
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
