// ============================================================================
// Import nodes
// ============================================================================
import Image from 'next/image'
import { motion } from "framer-motion"


// ============================================================================
// Import layouts
// ============================================================================
import Wrapper from '../../layouts/wrapper'


// ============================================================================
// Render component
// ============================================================================
const Poster = props => {
  const { src, foreground, foregroundWidth, foregroundHeight, alt, className } = props

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
      className={(className) ? `poster ${className}` : "poster"}
      animate="visible"
      initial="hidden"
      variants={motionPoster}
      transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5, delay: 0.1 }}
    >
      <Wrapper>
        <div className="poster__photo">
        {(foreground) && (
          <Image
            className="poster__foreground"
            src={foreground.src}
            alt={alt}
            width={foregroundWidth}
            height={foregroundHeight}
            priority="true"
          />
        )}
          <Image
            src={src.src}
            alt={alt}
            fill
            priority="true"
          />
        </div>
      </Wrapper>
    </motion.div>
  )
}

export default Poster
