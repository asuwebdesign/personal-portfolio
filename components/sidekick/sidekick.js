// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import Dots from '../../public/vectors/graphic-dots.svg'

// Render component
const Hero = props => {
  return (
    <header className="sidekick">
      <div className="sidekick__content">
        <h1 className="sidekick__meta">{props.meta}</h1>
        <div className="sidekick__title">{props.title}</div>
      </div>
      <div className="sidekick__dots">
        <Dots />
      </div>
    </header>
  )
}

export default Hero
