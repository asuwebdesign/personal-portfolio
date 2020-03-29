import React, { Fragment, useState } from "react"
import { Link } from "next/link"
import { motion } from "framer-motion"
import IconMenu from "../../../graphics/icon-menu.svg"

const Menu = props => {
  const [menuActive, setMenuState] = useState(false)

  const motionPanel = {
    open: { opacity: 1, x: 0, },
    closed: { opacity: 0, x: "-100%", }
  }

  const motionNav = {
    visible: { opacity: 1, x: 0, },
    hidden: { opacity: 0, x: "-100%", }
  }

  const motionPromo = {
    visible: { opacity: 1, width: "50%", },
    hidden: { opacity: 0, width: 0, }
  }

  return (
    <Fragment>

      {/* Menu Toggle */}
      <button
        className={`menu-toggle ${menuActive ? "menu-toggle--active" : ""}`}
        onClick={() => setMenuState(!menuActive)}
        aria-label="Toggle Menu"
        aria-expanded={menuActive ? "true" : "false"}
        aria-controls="menu"
      >
        <IconMenu />
      </button>

      {/* Menu Panel */}
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
            <li><Link href="/" onClick={() => setMenuState(!menuActive)}><a><strong>Hello.</strong> <small>My name is Mark.</small></a></Link></li>
            <li><Link href="/work" onClick={() => setMenuState(!menuActive)}><a><strong>Work.</strong> <small>What I've made.</small></a></Link></li>
            <li><Link href="/expertise" onClick={() => setMenuState(!menuActive)}><a><strong>What I do.</strong> <small>Services and expertise.</small></a></Link></li>
            <li><Link href="/about" onClick={() => setMenuState(!menuActive)}><a><strong>About.</strong> <small>Who I am.</small></a></Link></li>
            <li><Link href="/contact" onClick={() => setMenuState(!menuActive)}><a><strong>Contact.</strong> <small>Get in touch.</small></a></Link></li>
          </ul>
        </motion.nav>
        <motion.div
          className="menu__promo"
          animate={menuActive ? "visible" : "hidden"}
          initial="hidden"
          variants={motionPromo}
          transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.5, delay: 0.4 }}
        >
        </motion.div>
      </motion.div>
    </Fragment>
  )
}

export default Menu
