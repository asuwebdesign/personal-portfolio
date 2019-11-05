// Import nodes
import React from "react"
import Link from 'next/link'

// Import vectors
import LogoMarkRiggan from '../../public/vectors/logo-mark-riggan.svg'

// Import styles
import './mlogo.scss'

// Render component
const MLogo = props => {
  return (
    <div className="m-logo">
      <Link href="/">
        <a><LogoMarkRiggan /></a>
      </Link>
    </div>
  )
}

export default MLogo
