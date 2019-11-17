// Import nodes
import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { Controller, Scene } from 'react-scrollmagic'

// Import vectors
import LogoMarkRiggan from '../../public/vectors/logo-mark-riggan.svg'

// Import styles
import './mlogo.scss'

// Render component
const MLogo = props => {
  const [heroHeight, setHeroHeight] = useState(0)

  useEffect(() => {
    const hero = document.getElementById('hero')

    if (hero) {
      const heroHeight = document.getElementById('hero').clientHeight
      setHeroHeight(heroHeight)
    }
  })

  return (
    <Controller>
      <Scene duration={heroHeight} classToggle="m-logo--inverted" triggerHook="onLeave" triggerElement="#hero">
        <div className="m-logo">
          <Link href="/">
            <a><LogoMarkRiggan /></a>
          </Link>
        </div>
      </Scene>
    </Controller>

  )
}

export default MLogo
