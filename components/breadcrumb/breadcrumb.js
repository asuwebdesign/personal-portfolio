// ============================================================================
// Import nodes
// ============================================================================
import { useState, Fragment } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


// ============================================================================
// Render component
// ============================================================================
const Breadcrumb = props => {
  const { pathname } = props.router

  // states
  const [hideBreadcrumb, setHideBreadcrumb] = useState(false)

  // declared animations
  const motionLabel = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -32,
    }
  }

  const renderBreadcrumbTrail = () => {
    if (pathname === "/projects") {
      return "Projects"
    } else if (pathname === "/projects/atlantic-bt") {
      return (
        <Fragment>
          <strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Atlantic BT</span>
        </Fragment>
      )
    } else if (pathname === "/projects/hwy55") {
      return (
        <Fragment>
          <strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Hwy 55</span>
        </Fragment>
      )
    } else if (pathname === "/projects/university-wisconsin") {
      return (
        <Fragment>
          <strong><Link href="/projects"><span>Projects</span></Link></strong> <span>University of Wisconsin</span>
        </Fragment>
      )
    } else if (pathname === "/projects/nc-courts") {
      return (
        <Fragment>
          <strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Judicial Branch of NC</span>
        </Fragment>
      )
    } else if (pathname === "/projects/nc-gov") {
      return (
        <Fragment>
          <strong><Link href="/projects"><span>Projects</span></Link></strong> <span>State of North Carolina</span>
        </Fragment>
      )
    } else if (pathname === "/projects/redhat") {
      return (
        <Fragment>
          <strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Red Hat</span>
        </Fragment>
      )
    } else if (pathname === "/skills") {
      return "Skills"
    } else if (pathname === "/skills/branding") {
      return (
        <Fragment>
          <strong><Link href="/skills"><span>Skills</span></Link></strong> <span>Branding Strategy &amp; Identity</span>
        </Fragment>
      )
    } else if (pathname === "/skills/creative") {
      return (
        <Fragment>
          <strong><Link href="/skills"><span>Skills</span></Link></strong> <span>Creative &amp; Experience Design</span>
        </Fragment>
      )
    } else if (pathname === "/skills/research") {
      return (
        <Fragment>
          <strong><Link href="/skills"><span>Skills</span></Link></strong> <span>Research, Data &amp; Analytics</span>
        </Fragment>
      )
    } else if (pathname === "/skills/digital") {
      return (
        <Fragment>
          <strong><Link href="/skills"><span>Skills</span></Link></strong> <span>Websites &amp; Digital Platforms</span>
        </Fragment>
      )
    } else if (pathname === "/about") {
      return "About"
    } else if (pathname === "/about/manifesto") {
      return (
        <Fragment>
          <strong><Link href="/about"><span>About</span></Link></strong> <span>Manifesto</span>
        </Fragment>
      )
    } else if (pathname === "/about/process") {
      return (
        <Fragment>
          <strong><Link href="/about"><span>About</span></Link></strong> <span>Process</span>
        </Fragment>
      )
    } else if (pathname === "/contact") {
      return "Contact"
    } else if (pathname === "/terms") {
      return "Terms & Conditions"
    } else if (pathname === "/privacy") {
      return "Privacy Policy"
    } else if (pathname === "/accessibility") {
      return "Accessibility"
    } else {
      return (
        <Fragment>
          <strong>Mark Riggan</strong> <span>Designer &amp; Developer</span>
        </Fragment>
      )
    }
  }

  useScrollPosition(( { prevPos, currPos } ) => {
    (currPos.y <= -64) ? setHideBreadcrumb('breadcrumb--hide') : setHideBreadcrumb(false)
  }, [hideBreadcrumb])

  return (
    <div
      className={
        `breadcrumb ${hideBreadcrumb}`
      }
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={motionLabel}
        transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.2, delay: 0.1 }}
      >
        {renderBreadcrumbTrail()}
      </motion.div>
    </div>
  )
}

export default Breadcrumb
