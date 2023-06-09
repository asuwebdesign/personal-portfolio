// ============================================================================
// Import nodes
// ============================================================================
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Media from 'react-media'
import { motion } from "framer-motion"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


// ============================================================================
// Render component
// ============================================================================
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

      <Media queries={{
        mobile: "(max-width: 1279px)",
        desktop: "(min-width: 1280px)"
      }}>
        {matches => (
          <Fragment>
            {matches.mobile && (
              <Fragment>
                <div className="cover__photo">
                  {props.image && props.alt && (
                    <Image src={props.image.src} alt={props.alt} fill priority />
                  )}
                </div>
                <div className="wrapper">
                  <h1 className={`cover__title ${props.class}`} data-client={props.client}>
                    <span className="cover__title-client">{props.client}</span>
                    <span className="cover__title-headline">{props.headline}</span>
                  </h1>
                </div>
                <div
                  className="cover__dots"
                  animate={showDots ? "visible" : "hidden"}
                  initial="hidden"
                  variants={motionDots}
                  transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
                ></div>
              </Fragment>
            )}

            {matches.desktop && (
              <Fragment>
                <div className="cover__photo">
                  {props.image && props.alt && (
                    <Image src={props.image.src} alt={props.alt} fill priority />
                  )}
                </div>
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
              </Fragment>
            )}
          </Fragment>
        )}
      </Media>

    </header>
  )
}

export default Cover
