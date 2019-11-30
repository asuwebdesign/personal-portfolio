// Import nodes
import React from "react"
import Link from 'next/link'
import { motion } from "framer-motion"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import Dots from '../../public/vectors/graphic-dots.svg'
import IconSolutionB from '../../public/vectors/solution-b.svg'
import IconSolutionC from '../../public/vectors/solution-c.svg'
import IconSolutionR from '../../public/vectors/solution-r.svg'
import IconSolutionW from '../../public/vectors/solution-w.svg'

// Render component
const Cover = props => {

  // declared animations
  const motionCover = {
    visible: {
      opacity: 1,
      y: -50,
    },
    hidden: {
      opacity: 0,
      y: 0,
    }
  }

  return (
    <header className="cover">
      <motion.h1
        className="cover__title"
        animate="visible"
        initial="hidden"
        variants={motionCover}
        transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5, delay: 0.1 }}
      >
        <span className="cover__title-client">{props.client} &mdash;</span>
        <span className="cover__title-headline">{props.headline}</span>
      </motion.h1>

      <ul className="cover__services">
        <li><IconSolutionB /> Creative something</li>
        <li><IconSolutionB /> Creative something</li>
        <li><IconSolutionB /> Creative something</li>
        <li><IconSolutionB /> Creative something</li>
      </ul>

      <div className="cover__dots cover__dots--inverted">
        <Dots />
      </div>

      <div className="cover__photo">
        <img
          srcSet={props.image.srcSet}
          src={props.image.src}
          alt=""
          loading="lazy"
        />
      </div>
    </header>
  )
}

export default Cover
