'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import MLogo from '@/elements/mlogo/mlogo'

export default function Footer() {
  const [ref, inView] = useInView({
    threshold: 0
  })

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__primary">
          <MLogo />
          <p>{"Fueled by connecting with people and collaborating with organizations to push their brands further. Let's create something together that people love."}</p>
        </div>
        <div className="footer__secondary">
          <ul className="menu menu--legal">
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/accessibility">Accessibility</Link></li>
          </ul>
          <div className="copyright"><strong>&copy; {currentYear} Mark Riggan.</strong> All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}