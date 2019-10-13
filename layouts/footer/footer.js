// Import nodes
import React from "react"
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import components
import MLogo from '../../elements/m-logo'

// Import styles
import './footer.scss'

// Render component
const Footer = props => {

  const [ref, inView] = useInView({
    threshold: 0
  })

  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__primary">
          <p>{"My passion is about collaborating with organizations to push their brands further and connecting with people. Let's create something together that people love."}</p>
        </div>
        <div className="footer__secondary">
          <MLogo />
        </div>
        <div className="footer__tertiary">
          <ul className="menu menu--legal">
            <li><Link href="/terms"><a>Terms &amp; Conditions</a></Link></li>
            <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
            <li><Link href="/accessibility"><a>Accessibility</a></Link></li>
          </ul>
          <div className="copyright"><strong>&copy; Mark Riggan.</strong> All rights reserved.</div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
