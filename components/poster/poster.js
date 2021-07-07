// Import nodes
import React from "react"
import { motion } from "framer-motion"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Render component
const Poster = props => {
  const { src, alt } = props

  // declared animations
  const motionPoster = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 50,
    }
  }

  return (
    <motion.div
      className="poster"
      animate="visible"
      initial="hidden"
      variants={motionPoster}
      transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5, delay: 0.1 }}
    >
      <Wrapper>
        <div className="poster__photo">
          <img
            srcSet={src.srcSet}
            src={src.src}
            alt={alt}
            loading="lazy"
          />
        </div>
      </Wrapper>
    </motion.div>
  )
}

export default Poster
