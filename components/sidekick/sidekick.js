// Import nodes
import React, { useState } from "react"
import Link from 'next/link'
import { motion } from "framer-motion"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


// Import layouts
import Wrapper from '../../layouts/wrapper'

// Render component
const Hero = props => {

  // states
  const [hideDots, setHideDots] = useState(false)

  useScrollPosition(( { prevPos, currPos } ) => {
    (currPos.y <= -128) ? setHideDots('sidekick__dots--hide') : setHideDots(false)
  }, [hideDots])

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
      </motion.div>
      <div className={`sidekick__dots ${hideDots}`}></div>
    </header>
  )
}

export default Hero
