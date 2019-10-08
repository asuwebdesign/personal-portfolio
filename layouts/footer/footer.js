// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import styles
import './footer.scss'

// Render component
const Footer = props => {
  return (
    <footer className="layout layout--footer">
      <Wrapper>
        <ul>
          <li><Link href="/terms"><a>Terms &amp; Conditions</a></Link></li>
          <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
          <li><Link href="/accessibility"><a>Accessibility</a></Link></li>
        </ul>
        <div>&copy; Mark Riggan. All rights reserved.</div>
      </Wrapper>
    </footer>
  )
}

export default Footer
