// Import nodes
import React, { useState } from "react"
import Link from 'next/link'
import { motion } from "framer-motion"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import Dots from '../../public/vectors/graphic-dots.svg'

// Render component
const Hero = props => {

  // states
  const [hideDots, setHideDots] = useState(false)

  // declared animations
  const motionHeroTitle = {
    visible: {
      opacity: 1,
      y: '-50%',
    },
    hidden: {
      opacity: 0,
      y: '-40%',
    }
  }

  const motionHeroHighlights = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    },
    hidden: {
      opacity: 0,
    }
  }

  const motionHeroHighlight = {
    visible: {
      opacity: 1,
      y: '0%',
    },
    hidden: {
      opacity: 0,
      y: '10%',
    }
  }

  useScrollPosition(( { prevPos, currPos } ) => {
    (currPos.y <= -128) ? setHideDots('hero__dots--hide') : setHideDots(false)
  }, [hideDots])

  return (
    <header id="hero" className="hero">
      <motion.h1
        className="hero__title"
        animate="visible"
        initial="hidden"
        variants={motionHeroTitle}
        transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
      >
        Connecting brands with people through <span>Handcrafted Digital Experiences.</span>
    </motion.h1>

      <motion.div
        className="hero__highlights"
        animate="visible"
        initial="hidden"
        variants={motionHeroHighlights}
        transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
      >
        <motion.div variants={motionHeroHighlight}>
          <h2>Human-centered design.</h2>
          <p>Award-winning designs that are data-influenced and made for humans first.</p>
        </motion.div>
        <motion.div variants={motionHeroHighlight}>
          <h2>Top notch code.</h2>
          <p>Architected and built with the latest technologies for scalability and longevity.</p>
        </motion.div>
        <motion.div variants={motionHeroHighlight}>
          <h2>Tailored to your business.</h2>
          <p>Solutions that are tailored to the needs of your business. Nothing is cookie-cutter.</p>
        </motion.div>
      </motion.div>

      <div className={`hero__dots hero__dots--inverted ${hideDots}`}>
        <Dots />
      </div>

      <video className="hero__video" poster="/videos/dark-matter.jpg" autoPlay loop muted playsInline aria-hidden="true">
        <source src="/videos/dark-matter.m4v" type="video/mp4" />
        <source src="/videos/dark-matter.webm" type="video/webm" />
        <source src="/videos/dark-matter.ogv" type="video/ogg" />
        <source src="/videos/dark-matter.mp4" />
        <img
          srcSet={require('../../public/videos/dark-matter.jpg?resize').srcSet}
          src={require('../../public/videos/dark-matter.jpg?resize').src}
          alt="Dark matter"
        />
      </video>
    </header>
  )
}

export default Hero
