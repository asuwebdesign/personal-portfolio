'use client'

import Link from 'next/link'
import IconTailRight from '@/public/vectors/icon-tail-right.svg'

export default function Button(props) {
  if (props.external) {
    return (
      <a className="button" href={props.href} target="_blank" rel="noreferrer">{props.label} <IconTailRight /></a>
    )
  } else {
    return (
      <Link className="button" href={props.href}>
        {props.label}
        <IconTailRight />
      </Link>
    )
  }
}