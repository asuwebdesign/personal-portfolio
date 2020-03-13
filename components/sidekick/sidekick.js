// Import nodes
import React from "react"
import Link from 'next/link'
import { motion } from "framer-motion"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import Dots from '../../public/vectors/graphic-dots.svg'

// Render component
const Hero = props => {

  // declared animations
  const motionSidekick = {
    visible: {
      opacity: 1,
      y: '-50%',
    },
    hidden: {
      opacity: 0,
      y: '-35%',
    }
  }

  return (
    <header className={props.section ? "sidekick sidekick--section" : props.subtitle ? "sidekick sidekick--bold sidekick--section" : "sidekick"}>
      <motion.div
        className="sidekick__content"
        animate="visible"
        initial="hidden"
        variants={motionSidekick}
        transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
      >
        <h1 className="sidekick__title">{props.title}</h1>
        {props.subtitle && (
          <p className="sidekick__subtitle">{props.subtitle}</p>
        )}
      </motion.div>
      <div className="sidekick__dots">
        <Dots />
      </div>
    </header>
  )
}

export default Hero
