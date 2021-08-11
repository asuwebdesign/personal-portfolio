// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Render component
const Projects = props => {
  return (
    <div className="work">
      <Wrapper>
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
                    //srcSet={require('../../public/images/cards/card-hwy55.jpg?resize').srcSet}
                    //src={require('../../public/images/cards/card-hwy55.jpg?resize').src}
                    src={require('../../public/vectors/card-hwy55.svg')}
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
                    srcSet={require('../../public/images/covers/cover-wisconsin.jpg?resize').srcSet}
                    src={require('../../public/images/covers/cover-wisconsin.jpg?resize').src}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="work__project-client">University of Wisconsin</div>
                <h1 className="work__project-title">Pioneering healthcare education through a bolder brand for a pharmacy school in Wisconsin.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/nc-courts">
              <a className="work__project-link">
                <div className="work__project-photo">
                  <img
                    srcSet={require('../../public/images/covers/cover-nccourts.jpg?resize').srcSet}
                    src={require('../../public/images/covers/cover-nccourts.jpg?resize').src}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="work__project-client">NC Courts</div>
                <h1 className="work__project-title">Digitally transforming a more modern, inclusive platform for the state judicial branch.</h1>
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
                <h1 className="work__project-title">Crafting a more unified digital platform for government agencies in North Carolina.</h1>
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
                <h1 className="work__project-title">Engaging Red Hat employees of career development through exploration and delight.</h1>
              </a>
            </Link>
          </article>
        </div>
      </Wrapper>
    </div>
  )
}

export default Projects
