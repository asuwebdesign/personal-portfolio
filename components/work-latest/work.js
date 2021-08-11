// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import SymbolSquare from '../../public/symbols/symbol-square.svg'
import SymbolCircle from '../../public/symbols/symbol-circle.svg'
import SymbolHalfCircle from '../../public/symbols/symbol-half-circle.svg'
import SymbolHalfCircleBottom from '../../public/symbols/symbol-half-circle-bottom.svg'

// Render component
const Projects = props => {
  return (
    <section id="work-latest" className="work work--latest">
      <Wrapper>
        <h1 className="work__title">Selected Work</h1>
        <div className="work__list">
          <article className="work__project">
            <Link href="/projects/atlantic-bt">
              <a className="work__project-link">
                <div className="work__project-poster work__project-poster--atlanticbt">
                  <img
                    srcSet={require('../../public/images/cards/card-atlanticbt.png?resize').srcSet}
                    src={require('../../public/images/cards/card-atlanticbt.png?resize').src}
                    alt=""
                    loading="lazy"
                  />
                  <span className="work__project-poster-symbol" position="top-left"><SymbolHalfCircle /></span>
                  <span className="work__project-poster-symbol" position="top-right"><SymbolSquare /></span>
                  <span className="work__project-poster-symbol" position="bottom-left"><SymbolCircle /></span>
                  <span className="work__project-poster-symbol" position="bottom-right"><SymbolHalfCircleBottom /></span>
                </div>
                <div className="work__project-client">Atlantic BT</div>
                <h1 className="work__project-title">Revitalizing a digital agency's brand with an upgraded digital experience.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/hwy55">
              <a className="work__project-link">
                <div className="work__project-poster work__project-poster--hwy55">
                  <img
                    srcSet={require('../../public/images/cards/card-hwy55.png?resize').srcSet}
                    src={require('../../public/images/cards/card-hwy55.png?resize').src}
                    alt=""
                    loading="lazy"
                  />
                  <span className="work__project-poster-symbol" position="top-left"><SymbolHalfCircle /></span>
                  <span className="work__project-poster-symbol" position="top-right"><SymbolSquare /></span>
                  <span className="work__project-poster-symbol" position="bottom-left"><SymbolCircle /></span>
                  <span className="work__project-poster-symbol" position="bottom-right"><SymbolHalfCircleBottom /></span>
                </div>
                <div className="work__project-client">{'Hwy 55'}</div>
                <h1 className="work__project-title">Honoring the vintage past of Hwy 55 to build and evolve a more modern brand.</h1>
              </a>
            </Link>
          </article>
          <article className="work__project">
            <Link href="/projects/university-wisconsin">
              <a className="work__project-link">
                <div className="work__project-poster work__project-poster--wisconsin">
                  <img
                    srcSet={require('../../public/images/cards/card-uwpharmacy.jpg?resize').srcSet}
                    src={require('../../public/images/cards/card-uwpharmacy.jpg?resize').src}
                    alt=""
                    loading="lazy"
                  />
                  <span className="work__project-poster-symbol" position="top-left"><SymbolHalfCircle /></span>
                  <span className="work__project-poster-symbol" position="top-right"><SymbolSquare /></span>
                  <span className="work__project-poster-symbol" position="bottom-left"><SymbolCircle /></span>
                  <span className="work__project-poster-symbol" position="bottom-right"><SymbolHalfCircleBottom /></span>
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
