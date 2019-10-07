// Import nodes
import React from "react"
import Link from 'next/link'

// Import styles
// import './footer.scss'

const Header = props => {
  return (
    <header>
      <h1>Mark Riggan</h1>

      <button>Menu</button>

      <nav>
        <h1>Browse</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/services">Services</a></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>

      <ul>
        <li><a href="#" target="_blank">Facebook</a></li>
        <li><a href="#" target="_blank">Facebook</a></li>
        <li><a href="#" target="_blank">Facebook</a></li>
        <li><a href="#" target="_blank">Facebook</a></li>
      </ul>

      <Link href="/contact"><a>Get in Touch</a></Link>

      <div>Scroll Down</div>
    </header>
  )
}

export default Header
