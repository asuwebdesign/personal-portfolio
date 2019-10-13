// Import nodes
import React, { useState } from "react"
import Link from 'next/link'
import { motion } from "framer-motion"

// Import elements
import MLogo from '../../elements/m-logo'
import Button from '../../elements/button/'

// Import vectors
import LogoMarkRiggan from '../../public/vectors/logo-mark-riggan.svg'
import IconMenu from '../../public/vectors/menu.svg'
import IconDribbble from '../../public/vectors/social-dribbble.svg'
import IconLinkedIn from '../../public/vectors/social-linkedin.svg'
import IconTwitter from '../../public/vectors/social-twitter.svg'
import Dots from '../../public/vectors/graphic-dots.svg'
import Circle from '../../public/vectors/circle.svg'

// Import styles
import './header.scss'

// Render component
const Header = props => {

  // initial states
  const [menuActive, setMenuState] = useState(false)

  // declared animations
  const motionPanel = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "-100%",
    }
  }

  const motionNav = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: "-100%",
    }
  }

  const motionPromo = {
    visible: {
      opacity: 1,
      x: 64,
    },
    hidden: {
      opacity: 0,
      x: 0,
    }
  }

  return (
    <header className="layout layout--header">
      <MLogo primary />

      <div className="breadcrumb"><strong>Mark Riggan</strong> Designer &amp; Developer</div>

      <button
        className={`menu-toggle ${menuActive ? "menu-toggle--active" : ""}`}
        onClick={() => setMenuState(!menuActive)}
        aria-label="Toggle Menu"
        aria-expanded={menuActive ? "true" : "false"}
        aria-controls="menu"
      >
        <IconMenu />
      </button>

      <motion.div
        id="menu"
        className="menu"
        animate={menuActive ? "open" : "closed"}
        initial="closed"
        variants={motionPanel}
        transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5 }}
      >
        <motion.nav
          className="menu__list"
          role="navigation"
          animate={menuActive ? "visible" : "hidden"}
          initial="hidden"
          variants={motionNav}
          transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5, delay: 0.2 }}
        >
          <h1>Menu</h1>
          <ul>
            <li><Link href="/"><a onClick={() => setMenuState(!menuActive)}>Hello.</a></Link></li>
            <li><Link href="/projects"><a onClick={() => setMenuState(!menuActive)}>Projects.</a></Link></li>
            <li><Link href="/services"><a onClick={() => setMenuState(!menuActive)}>Services.</a></Link></li>
            <li><Link href="/about"><a onClick={() => setMenuState(!menuActive)}>About.</a></Link></li>
            <li><Link href="/contact"><a onClick={() => setMenuState(!menuActive)}>Contact.</a></Link></li>
          </ul>
        </motion.nav>
        <motion.div
          className="menu__promo"
          animate={menuActive ? "visible" : "hidden"}
          initial="hidden"
          variants={motionPromo}
          transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5, delay: 0.4 }}
        >
          <p>Create progress people love.</p>
          <p>{"We mean business. It's our middle name."}</p>
          <img src="images/src/hoodie.png" />
        </motion.div>
        <div className="artifacts">
          <Circle />
        </div>
        <div className="hero__dots hero__dots--inverted">
          <Dots />
        </div>
      </motion.div>

      <ul className="social-follow">
        <li><a href="#" target="_blank"><IconDribbble /></a></li>
        <li><a href="#" target="_blank"><IconLinkedIn /></a></li>
        <li><a href="#" target="_blank"><IconTwitter /></a></li>
      </ul>

      <div className="actions">
        <Button href="/contact" label="Get in Touch" />
      </div>

      <div className="scroll-indicator">Scroll Down</div>
    </header>
  )
}

export default Header
