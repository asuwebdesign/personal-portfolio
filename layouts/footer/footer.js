// Import nodes
import React from "react"
import Link from 'next/link'

// Import styles
// import './footer.scss'

const Footer = props => {
  return (
    <footer>
      <ul>
        <li><Link href="/terms"><a>Terms &amp; Conditions</a></Link></li>
        <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
        <li><Link href="/accessibility"><a>Accessibility</a></Link></li>
      </ul>
      <div>&copy; Mark Riggan. All rights reserved.</div>
    </footer>
  )
}

export default Footer
