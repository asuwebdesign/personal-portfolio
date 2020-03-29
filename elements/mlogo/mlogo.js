// Import nodes
import React, { useState, useEffect } from "react"
import Link from 'next/link'

// Import vectors
import LogoMarkRiggan from '../../public/vectors/logo-mark-riggan.svg'

// Render component
const MLogo = props => {
  const renderLink = () => {
    if (props.primary) {
      return (
        <h1 id="m-logo" className="m-logo">
          <Link href="/">
            <a><LogoMarkRiggan /></a>
          </Link>
        </h1>
      )
    } else {
      return (
        <div id="m-logo" className="m-logo">
          <Link href="/">
            <a><LogoMarkRiggan /></a>
          </Link>
        </div>
      )
    }
  }

  return (
    renderLink()
  )
}

export default MLogo
