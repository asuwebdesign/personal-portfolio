// Import nodes
import React, { useState } from "react"
import Link from 'next/link'
import { motion } from "framer-motion"
import Media from 'react-media'

// Import components
import Breadcrumb from '../../components/breadcrumb'

// Import elements
import MLogo from '../../elements/mlogo'
import Button from '../../elements/button'

// Import vectors
import LogoMarkRiggan from '../../public/vectors/logo-mark-riggan.svg'
import IconMenu from '../../public/vectors/menu.svg'
import IconDribbble from '../../public/vectors/social-dribbble.svg'
import IconLinkedIn from '../../public/vectors/social-linkedin.svg'
import IconTwitter from '../../public/vectors/social-twitter.svg'
import Dots from '../../public/vectors/graphic-dots.svg'
import Circle from '../../public/vectors/circle.svg'

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

  const { pathname } = props.router

  return (
    <header className="layout layout--header">
      <MLogo primary />

      <Media query="(min-width: 1280px)" render={() => (
        <Breadcrumb {...props} />
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

        <Media query="(min-width: 1280px)" render={() => (
          <motion.div
            className="menu__promo"
            animate={menuActive ? "visible" : "hidden"}
            initial="hidden"
            variants={motionPromo}
            transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5, delay: 0.4 }}
          >
            <p>Change the world <span>one pixel at a time&trade;</span></p>
            <div className="artifacts">
              <Circle />
            </div>
            <div className="hero__dots hero__dots--inverted">
              <Dots />
            </div>
          </motion.div>
        )} />
      </motion.div>

      <Media query="(min-width: 1280px)" render={() => (
        <ul className="social">
          <li className="social__brand social__brand--dribbble"><a href="https://dribbble.com/markr" target="_blank"><IconDribbble /></a></li>
          <li className="social__brand social__brand--linkedin"><a href="https://www.linkedin.com/in/markriggan" target="_blank"><IconLinkedIn /></a></li>
          <li className="social__brand social__brand--twitter"><a href="https://twitter.com/asuwebdesign" target="_blank"><IconTwitter /></a></li>
        </ul>
      )} />

      <Media query="(min-width: 1280px)" render={() => (
        <div className="actions">
          <Button href="/contact" label="Get in Touch" />
        </div>
      )} />

      <Media query="(min-width: 1280px)" render={() => (
        <div className="scroll-indicator">Scroll Down</div>
      )} />

    </header>
  )
}

export default Header
