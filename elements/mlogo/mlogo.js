// Import nodes
import React, { useState, useEffect } from "react"
import Link from 'next/link'

// Import vectors
import LogoMarkRiggan from '../../public/vectors/logo-mark-riggan.svg'

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
