// ============================================================================
// Import nodes
// ============================================================================
import Link from 'next/link'


// ============================================================================
// Render component
// ============================================================================
const Detour = props => {
  return (
    <aside className="detour">
      <Link href={props.link}>
        <a className="detour__link">
          <h1 className="detour__meta">{props.meta}</h1>
          <div className="detour__title">{props.title}</div>
        </a>
      </Link>
    </aside>
  )
}

export default Detour
