// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import styles
import './hero.scss'

// Render component
const Hero = props => {
  return (
    <header className="hero">
      <Wrapper>
        <h1>Connecting brands with people through Handcrafted Digital Experiences.</h1>
        <h2>Human-centered design.</h2>
        <p>Award-winning designs that are data-influenced and made for humans first.</p>
        <h2>Top notch code.</h2>
        <p>Architected and built with the latest technologies for scalability and longevity.</p>
        <h2>Tailored to your business.</h2>
        <p>Solutions that are tailored to the needs of your business. Nothing is cookie-cutter.</p>
      </Wrapper>
      <video autoPlay loop muted>
        <source src="/static/videos/dark-matter.webm" type="video/webm" />
        <source src="/static/videos/dark-matter.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </header>
  )
}

export default Hero
