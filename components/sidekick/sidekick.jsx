'use client'

import { useState } from 'react'
import Media from 'react-media'
import { motion } from 'framer-motion'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default function Sidekick(props) {
  // states
  const [showDots, setDots] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    (currPos.y <= -128) ? setDots(false) : setDots(true)
  }, [showDots])

  // declared animations
  const motionSidekick = {
    visible: {
      opacity: 1,
      y: '0%',
    },
    hidden: {
      opacity: 0,
      y: '10%',
    }
  }

  const motionDots = {
    visible: {
      opacity: 1,
      x: '0%',
      y: '-50%'
    },
    hidden: {
      opacity: 0,
      x: '25%',
      y: '-50%'
    }
  }

  return (
    <header className={props.section ? "sidekick sidekick--section" : props.subtitle ? "sidekick sidekick--bold sidekick--section" : "sidekick"}>
      <div className="wrapper">
        <motion.div 
          className="sidekick__content"
          animate="visible"
          initial="hidden"
          variants={motionSidekick}
          transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
        >
          <h1 className="sidekick__title">{props.title}</h1>
        </motion.div>
      </div>

      <motion.div
        className="sidekick__dots"
        animate={showDots ? "visible" : "hidden"}
        initial="hidden"
        variants={motionDots}
        transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
      ></motion.div>
    </header>
  )
}