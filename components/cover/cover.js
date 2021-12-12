// Import nodes
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import IconSolutionB from '../../public/vectors/solution-b.svg'
import IconSolutionC from '../../public/vectors/solution-c.svg'
import IconSolutionR from '../../public/vectors/solution-r.svg'
import IconSolutionW from '../../public/vectors/solution-w.svg'

// Render component
const Cover = props => {

  // states
  const [showDots, setDots] = useState(true)

  useScrollPosition(( { prevPos, currPos } ) => {
    (currPos.y <= -128) ? setDots(false) : setDots(true)
  }, [showDots])

  // declared animations
  const motionCover = {
    visible: {
      opacity: 1,
      y: '-50%',
    },
    hidden: {
      opacity: 0,
      y: '-25%',
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
    <header className="cover">
      <div className="wrapper">
        <motion.h1
          className={`cover__title ${props.class}`}
          data-client={props.client}
          animate="visible"
          initial="hidden"
          variants={motionCover}
          transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5, delay: 0.1 }}
        >
          <span className="cover__title-client">{props.client}</span>
          <span className="cover__title-headline">{props.headline}</span>
        </motion.h1>
      </div>

      <motion.div
        className="cover__dots"
        animate={showDots ? "visible" : "hidden"}
        initial="hidden"
        variants={motionDots}
        transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
      ></motion.div>

      <div className="cover__photo">
        <Image
          src={props.image.src}
          alt={props.alt}
          layout="fill"
          priority
        />
      </div>
    </header>
  )
}

export default Cover
