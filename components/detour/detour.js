// Import nodes
import React from "react"
import Link from 'next/link'

// Import vectors
import IconTailRight from "../../public/vectors/icon-tail-right.svg"

// Render component
const Detour = props => {
  return (
    <aside className="detour">
      <article>
        <Link href={props.link}>
          <a className="detour__link">
            <h1 className="detour__meta">{props.meta}</h1>
            <div className="detour__title">{props.title}</div>
            <IconTailRight />
          </a>
        </Link>
      </article>
    </aside>
  )
}

export default Detour
