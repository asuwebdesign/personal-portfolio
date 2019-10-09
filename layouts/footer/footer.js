// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import components
import MLogo from '../../elements/m-logo'

// Import styles
import './footer.scss'

// Render component
const Footer = props => {
  return (
    <footer className="layout layout--footer">
      <Wrapper>
        <div className="layout__primary">
          <p>We help collaborate with organizations to push their brands further. We’d love to make something great together.</p>
          <a href="#">business@me.com</a>
        </div>
        <div className="layout__secondary">
          <MLogo />
          <ul className="menu menu--legal">
            <li><Link href="/terms"><a>Terms &amp; Conditions</a></Link></li>
            <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
            <li><Link href="/accessibility"><a>Accessibility</a></Link></li>
          </ul>
          <div className="copyright">&copy; Mark Riggan. All rights reserved.</div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
