// Import nodes
import React from "react"
import Link from 'next/link'

// Import styles
// import './footer.scss'

const Header = props => {
  return (
    <div>
      <h1>Mark Riggan</h1>

      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">What I Do</a></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
