'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import Media from 'react-media'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import MLogo from '@/elements/mlogo/mlogo'
import Button from '@/elements/button/button'
import IconMenu from '@/public/vectors/menu.svg'
import IconDribbble from '@/public/vectors/social-dribbble.svg'
import IconMedium from '@/public/vectors/social-medium.svg'
import IconLinkedIn from '@/public/vectors/social-linkedin.svg'
import IconTwitter from '@/public/vectors/social-twitter.svg'
import Dots from '@/public/vectors/graphic-dots.svg'
import Circle from '@/public/vectors/circle.svg'
import Breadcrumb from '@/components/breadcrumb/breadcrumb'

export default function Header(props) {
  // initial states
  const [menuActive, setMenuState] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(true)

  // declared animations
  const motionPanel = {
    open: {
      opacity: 1,
      x: 0,
      pointerEvents: 'auto',
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.25
      }
    },
    closed: {
      opacity: 0,
      x: '-8px',
      pointerEvents: 'none',
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.1
      }
    }
  }

  const motionNav = {
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        velocity: 50,
        duration: 0.15,
        staggerChildren: 0.05,
        delayChildren: 0.05,
      }
    },
    hidden: {
      opacity: 0,
    }
  }

  const motionMenuItem = {
    visible: {
      opacity: 1,
      x: '0%',
    },
    hidden: {
      opacity: 0,
      x: '-10%',
    }
  }

  const motionPromo = {
    visible: {
      opacity: 1,
      // y: 0,
    },
    hidden: {
      opacity: 0,
      // y: 32,
    }
  }

  const motionScrollTop = {
    visible: {
      opacity: 1,
      y: 0
    },
    hidden: {
      opacity: 0,
      y: "100%"
    }
  }

  useScrollPosition(({ prevPos, currPos }) => {
    (currPos.y <= -128) ? setShowScrollTop(false) : setShowScrollTop(true)
  }, [showScrollTop])

  return (
    <header className="layout layout--header">
      <MLogo primary />

      <Media query="(min-width: 1280px)" render={() => (
        <Breadcrumb />
      )} />

      <button
        className={`menu-toggle ${menuActive ? "menu-toggle--active" : ""}`}
        onClick={() => setMenuState(!menuActive)}
        aria-label="Toggle Menu"
        aria-expanded={menuActive ? "true" : "false"}
        aria-controls="menu"
      >
        <IconMenu />
      </button>


      <motion.div id="menu" className="menu" animate={menuActive ? "open" : "closed"} initial="closed" variants={motionPanel}>
        <nav className="menu__list" role="navigation">
          <h1>Menu</h1>
          <motion.ol animate={menuActive ? "visible" : "hidden"} initial="hidden" variants={motionNav}>
            <motion.li variants={motionMenuItem}><Link onClick={() => setMenuState(!menuActive)} href="/">Hello</Link></motion.li>
            <motion.li variants={motionMenuItem}><Link onClick={() => setMenuState(!menuActive)} href="/projects">Projects</Link></motion.li>
            <motion.li variants={motionMenuItem}><Link onClick={() => setMenuState(!menuActive)} href="/skills">Skills</Link></motion.li>
            <motion.li variants={motionMenuItem}><Link onClick={() => setMenuState(!menuActive)} href="/about">About</Link></motion.li>
            <motion.li variants={motionMenuItem}><Link onClick={() => setMenuState(!menuActive)} href="/contact">Contact</Link></motion.li>
          </motion.ol>
        </nav>
      </motion.div>

      <Media query="(min-width: 1280px)" render={() => (
        <ul className="social">
          <li className="social__brand social__brand--dribbble"><a href="https://dribbble.com/markr" target="_blank" rel="noreferrer"><IconDribbble /></a></li>
          <li className="social__brand social__brand--medium"><a href="https://medium.com/@Asuwebdesign" target="_blank" rel="noreferrer"><IconMedium /></a></li>
          <li className="social__brand social__brand--linkedin"><a href="https://www.linkedin.com/in/markriggan" target="_blank" rel="noreferrer"><IconLinkedIn /></a></li>
          <li className="social__brand social__brand--twitter"><a href="https://twitter.com/asuwebdesign" target="_blank" rel="noreferrer"><IconTwitter /></a></li>
        </ul>
      )} />

      <Media query="(min-width: 1280px)" render={() => (
        <div className="actions">
          <Button href="/contact" label="Get in Touch" />
        </div>
      )} />

      <Media query="(min-width: 1280px)" render={() => (
        <motion.div
          className="scroll-indicator"
          animate={showScrollTop ? "visible" : "hidden"}
          initial="visible"
          variants={motionScrollTop}
          transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
        >
          <span>Scroll Down</span>
        </motion.div>
      )} />

    </header>
  )
}