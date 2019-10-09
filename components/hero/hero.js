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
        <h1 className="hero__title">Connecting brands with people through <span>Handcrafted Digital Experiences.</span></h1>

        <div className="hero__highlights">
          <div>
            <h2>Human-centered design.</h2>
            <p>Award-winning designs that are data-influenced and made for humans first.</p>
          </div>
          <div>
            <h2>Top notch code.</h2>
            <p>Architected and built with the latest technologies for scalability and longevity.</p>
          </div>
          <div>
            <h2>Tailored to your business.</h2>
            <p>Solutions that are tailored to the needs of your business. Nothing is cookie-cutter.</p>
          </div>
        </div>
      </Wrapper>
      <video poster="/videos/dark-matter.jpg" autoPlay loop muted playsInline aria-hidden="true">
        <source src="/videos/dark-matter.m4v" type="video/mp4" />
        <source src="/videos/dark-matter.webm" type="video/webm" />
        <source src="/videos/dark-matter.ogv" type="video/ogg" />
        <source src="/videos/dark-matter.mp4" />
        <img src="/videos/dark-matter.jpg" alt="Dark matter" />
      </video>
    </header>
  )
}

export default Hero
