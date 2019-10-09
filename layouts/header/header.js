// Import nodes
import React from "react"
import Link from 'next/link'

// Import components
import MLogo from '../../elements/m-logo'

// Import vectors
import LogoMarkRiggan from '../../static/vectors/logo-mark-riggan.svg'
import IconMenu from '../../static/vectors/menu.svg'
import IconDribbble from '../../static/vectors/social-dribbble.svg'
import IconLinkedIn from '../../static/vectors/social-linkedin.svg'
import IconTwitter from '../../static/vectors/social-twitter.svg'

// Import styles
import './header.scss'

// Render component
const Header = props => {
  return (
    <header className="layout layout--header">
      <MLogo primary />

      <button>Menu</button>

      <div className="panel">
        <nav>
          <h1><IconMenu /></h1>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/services">Services</a></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>

        <p>Create progress people love.</p>
        <p>{"We mean business. It's our middle name."}</p>
      </div>

      <ul className="social-follow">
        <li><a href="#" target="_blank"><IconDribbble /></a></li>
        <li><a href="#" target="_blank"><IconLinkedIn /></a></li>
        <li><a href="#" target="_blank"><IconTwitter /></a></li>
      </ul>

      <Link href="/contact"><a>Get in Touch</a></Link>

      <div>Scroll Down</div>
    </header>
  )
}

export default Header
