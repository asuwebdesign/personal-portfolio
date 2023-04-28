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
      <Link className="detour__link" href={props.link}>
        <h1 className="detour__meta">{props.meta}</h1>
        <div className="detour__title">{props.title}</div>
      </Link>
    </aside>
  )
}

export default Detour
