// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import Dots from '../../public/vectors/graphic-dots.svg'

// Import styles
import './sidekick.scss'

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
      <div className="sidekick__bg">
        <img src="https://source.unsplash.com/user/erondu/1920x1080" alt="" />
      </div>
    </header>
  )
}

export default Hero
