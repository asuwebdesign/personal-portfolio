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
      <video poster="/static/videos/dark-matter.jpg" autoPlay loop muted playsInline aria-hidden="true">
        <source src="/static/videos/dark-matter.m4v" type="video/mp4" />
        <source src="/static/videos/dark-matter.webm" type="video/webm" />
        <source src="/static/videos/dark-matter.ogv" type="video/ogg" />
        <source src="/static/videos/dark-matter.mp4" />
        <img src="/static/videos/dark-matter.jpg" alt="Dark matter" />
      </video>
    </header>
  )
}

export default Hero
