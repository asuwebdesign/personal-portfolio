// ============================================================================
// Import nodes
// ============================================================================
import Link from 'next/link'


// ============================================================================
// Import vectors
// ============================================================================
import LogoMarkRiggan from '../../public/logos/logo-mark-riggan.svg'


// When document scrolls, if $element1.scrollTop == $element2.scrollTop
// then make $element1 == inverted
// else make $element1 == default


// ============================================================================
// Render component
// ============================================================================
const MLogo = props => {
  const renderLink = () => {
    if (props.primary) {
      return (
        <h1 id="m-logo" className="m-logo">
          <Link href="/">
            <LogoMarkRiggan />
          </Link>
        </h1>
      )
    } else {
      return (
        <div id="m-logo" className="m-logo">
          <Link href="/">
            <LogoMarkRiggan />
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
