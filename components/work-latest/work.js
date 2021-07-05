// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

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
                  <img
                    srcSet={require('../../public/images/cards/card-atlanticbt.png?resize').srcSet}
                    src={require('../../public/images/cards/card-atlanticbt.png?resize').src}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="work__project-client">Atlantic BT</div>
                <h1 className="work__project-title">Revitalizing a digital agency's brand with an upgraded digital experience.</h1>
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
                <h1 className="work__project-title">Honoring the vintage past of Hwy 55 to build and evolve a more modern brand.</h1>
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
                <h1 className="work__project-title">Pioneering healthcare education through a bolder brand for a pharmacy school in Wisconsin.</h1>
              </a>
            </Link>
          </article>
        </div>
      </Wrapper>
    </section>
  )
}

export default Projects
