'use client'

import Link from 'next/link'

export default function Cover(props) {
  return (
    <aside className="detour">
      <Link className="detour__link" href={props.link}>
        <h1 className="detour__meta">{props.meta}</h1>
        <div className="detour__title">{props.title}</div>
      </Link>
    </aside>
  )
}