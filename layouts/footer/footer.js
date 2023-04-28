// ============================================================================
// Import nodes
// ============================================================================
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

// ============================================================================
// Import layouts
// ============================================================================
import Wrapper from '../../layouts/wrapper'


// ============================================================================
// Import components
// ============================================================================
import MLogo from '../../elements/mlogo'


// ============================================================================
// Render component
// ============================================================================
const Footer = () => {

  const [ref, inView] = useInView({
    threshold: 0
  })

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__primary">
          <MLogo />
          <p>{"Fueled by connecting with people and collaborating with organizations to push their brands further. Let's create something together that people love."}</p>
        </div>
        <div className="footer__secondary">
          <ul className="menu menu--legal">
            <li><Link href="/terms"><a>Terms &amp; Conditions</a></Link></li>
            <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
            <li><Link href="/accessibility"><a>Accessibility</a></Link></li>
          </ul>
          <div className="copyright"><strong>&copy; {currentYear} Mark Riggan.</strong> All rights reserved.</div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
