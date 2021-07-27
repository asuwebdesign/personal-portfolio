// Import nodes
import React, { useState } from "react"
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
  const [hideDots, setHideDots] = useState(false)

  useScrollPosition(( { prevPos, currPos } ) => {
    (currPos.y <= -128) ? setHideDots('cover__dots--hide') : setHideDots(false)
  }, [hideDots])

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

  return (
    <header className="cover">
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

      <div className={`cover__dots cover__dots--inverted ${hideDots}`}></div>

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
