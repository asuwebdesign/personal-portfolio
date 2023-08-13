'use client'

import Link from 'next/link'
import LogoMarkRiggan from '@/public/logos/logo--mark-riggan.svg'

export default function MLogo(props) {
  return (
    <>
      {props.primary && (
        <h1 id="m-logo" className="m-logo">
          <Link href="/">
            <LogoMarkRiggan />
          </Link>
        </h1>
      )}
      {!props.primary && (
        <div id="m-logo" className="m-logo">
          <Link href="/">
            <LogoMarkRiggan />
          </Link>
        </div>
      )}
    </>
  )
}