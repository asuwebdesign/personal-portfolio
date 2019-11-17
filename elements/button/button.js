// Import nodes
import React from "react"
import Link from 'next/link'

// Import vectors
import IconTailRight from '../../public/vectors/icon-tail-right.svg'

// Render component
const Button = props => {
  return (
    <Link href={props.href}>
      <a className="button">{props.label} <IconTailRight /></a>
    </Link>
  )
}

export default Button
