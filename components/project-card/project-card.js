// Import nodes
import React from "react"
import Link from 'next/link'
import Image from 'next/image'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import IconTailRight from '../../public/vectors/icon-tail-right.svg'

// Import symbols
import SymbolSquare from '../../public/symbols/symbol-square.svg'
import SymbolCircle from '../../public/symbols/symbol-circle.svg'
import SymbolHalfCircle from '../../public/symbols/symbol-half-circle.svg'
import SymbolHalfCircleBottom from '../../public/symbols/symbol-half-circle-bottom.svg'
import SymbolTriangleTopLeft from '../../public/symbols/symbol-triangle-top-left.svg'
import SymbolTriangleTopRight from '../../public/symbols/symbol-triangle-top-right.svg'
import SymbolTriangleBottomLeft from '../../public/symbols/symbol-triangle-bottom-left.svg'
import SymbolTriangleBottomRight from '../../public/symbols/symbol-triangle-bottom-right.svg'

// Render component
const ProjectCard = props => {

  function renderSymbol(props) {
    if (props === "square") { return <SymbolSquare /> }
    else if ( props === "circle" ) { return <SymbolCircle /> }
    else if ( props === "half-circle" ) { return <SymbolHalfCircle /> }
    else if ( props === "half-circle-bottom" ) { return <SymbolHalfCircleBottom /> }
    else if ( props === "triangle-top-left" ) { return <SymbolTriangleTopLeft /> }
    else if ( props === "triangle-top-right" ) { return <SymbolTriangleTopRight /> }
    else if ( props === "triangle-bottom-left" ) { return <SymbolTriangleBottomLeft /> }
    else if ( props === "triangle-bottom-right" ) { return <SymbolTriangleBottomRight /> }
    else { return null }
  }

  return (
    <article className={`work__project ${props.project.className}`}>
      <Link href={props.project.href}>
        <a className="work__project-link">
          <div className="work__project-poster">
            <Image
              src={props.project.src}
              alt={props.project.alt}
              layout="fill"
            />
            <span className="work__project-poster-symbol" position="top-left">{renderSymbol(props.project.symbol.topLeft)}</span>
            <span className="work__project-poster-symbol" position="top-right">{renderSymbol(props.project.symbol.topRight)}</span>
            <span className="work__project-poster-symbol" position="bottom-left">{renderSymbol(props.project.symbol.bottomLeft)}</span>
            <span className="work__project-poster-symbol" position="bottom-right"><IconTailRight /></span>
          </div>
          <div className="work__project-client">{props.project.client}</div>
          <h1 className="work__project-title">{props.project.title}</h1>
        </a>
      </Link>
    </article>
  )
}

export default ProjectCard
