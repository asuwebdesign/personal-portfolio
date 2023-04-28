// ============================================================================
// Import nodes
// ============================================================================
import Link from 'next/link'


// ============================================================================
// Import vectors
// ============================================================================
import IconTailRight from '../../public/vectors/icon-tail-right.svg'


// ============================================================================
// Render component
// ============================================================================
const Button = props => {
  if (props.external) {
    return (
      <a className="button" href={props.href} target="_blank" rel="noreferrer">{props.label} <IconTailRight /></a>
    )
  } else {
    return (
      <Link href={props.href}>
        <a className="button">{props.label} <IconTailRight /></a>
      </Link>
    )
  }
}

export default Button
