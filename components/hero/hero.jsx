'use client'

import { useState } from "react"
import Image from 'next/image'
import Media from 'react-media'
import { motion } from "framer-motion"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default function Hero() {
  // states
  const [showDots, setDots] = useState(true)

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
        staggerChildren: 0.15,
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

  useScrollPosition(({ prevPos, currPos }) => {
    (currPos.y <= -128) ? setDots(false) : setDots(true)
  }, [showDots])

  return (
    <header id="hero" className="hero" data-navigation="white">
      <div className="wrapper">

        <Media queries={{
          mobile: "(max-width: 1279px)",
          desktop: "(min-width: 1280px)"
        }}>

          {matches => (
            <>
              {matches.mobile && (
                <>
                  <h1 className="hero__title">Connecting brands with people through <span>Handcrafted Digital Experiences.</span></h1>

                  <div className="hero__highlights">
                    <div>
                      <h2>Human-centered design.</h2>
                      <p>Award-winning designs that are data-influenced and made for humans first.</p>
                    </div>
                    <div>
                      <h2>Top notch code.</h2>
                      <p>Architected and built with the latest technologies for scalability and longevity.</p>
                    </div>
                    <div>
                      <h2>Tailored to your business.</h2>
                      <p>Solutions that are tailored to the needs of your business. Nothing is cookie-cutter.</p>
                    </div>
                  </div>
                </>
              )}

              {matches.desktop && (
                <>
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
                    transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5, delay: 0.5 }}
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

                  <motion.div
                    className="hero__dots"
                    animate={showDots ? "visible" : "hidden"}
                    initial="hidden"
                    variants={motionDots}
                    transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
                  ></motion.div>

                  <video className="hero__video" poster="/videos/dark-matter.png" autoPlay loop muted playsInline aria-hidden="true">
                    <source src="/videos/dark-matter.webm" type="video/webm" />
                    <source src="/videos/dark-matter.ogv" type="video/ogg" />
                    <source src="/videos/dark-matter.mp4" />
                    <Image src="/videos/dark-matter.png" alt="Dark matter" width={1920} height={1080} sizes="100vw" />
                  </video>
                </>
              )}
            </>
          )}

        </Media>

      </div>
    </header>
  )
}