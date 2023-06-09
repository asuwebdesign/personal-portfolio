// ============================================================================
// Import packages
// ============================================================================
import { Fragment, useState } from 'react'
import { Link } from "next/link"
import { motion } from "framer-motion"
import IconMenu from "../../../graphics/icon-menu.svg"


// ============================================================================
// Render component
// ============================================================================
const Menu = () => {
  const [menuActive, setMenuState] = useState(false)

  // If mobile, menu opens from right
  // If desktop, menu opens from left
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
            <li><Link href="/" onClick={() => setMenuState(!menuActive)}><strong>Hello.</strong> <small>My name is Mark.</small></Link></li>
            <li><Link href="/work" onClick={() => setMenuState(!menuActive)}><strong>Work.</strong> <small>What I've made.</small></Link></li>
            <li><Link href="/expertise" onClick={() => setMenuState(!menuActive)}><strong>What I do.</strong> <small>Services and expertise.</small></Link></li>
            <li><Link href="/about" onClick={() => setMenuState(!menuActive)}><strong>About.</strong> <small>Who I am.</small></Link></li>
            <li><Link href="/contact" onClick={() => setMenuState(!menuActive)}><strong>Contact.</strong> <small>Get in touch.</small></Link></li>
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
