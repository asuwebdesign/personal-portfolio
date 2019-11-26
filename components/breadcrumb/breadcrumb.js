// Import nodes
import React, { Fragment } from "react"
import Link from 'next/link'
import { motion } from "framer-motion"

// Render component
const Breadcrumb = props => {
  const { pathname } = props.router

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
    } else if (pathname === "/services") {
      return "Services"
    } else if (pathname === "/services/branding") {
      return (
        <Fragment>
          <strong><Link href="/services"><a><span>Services</span></a></Link></strong> <span>Branding Strategy &amp; Identity</span>
        </Fragment>
      )
    } else if (pathname === "/services/creative") {
      return (
        <Fragment>
          <strong><Link href="/services"><a><span>Services</span></a></Link></strong> <span>Creative &amp; Experience Design</span>
        </Fragment>
      )
    } else if (pathname === "/services/research") {
      return (
        <Fragment>
          <strong><Link href="/services"><a><span>Services</span></a></Link></strong> <span>Research, Data &amp; Analytics</span>
        </Fragment>
      )
    } else if (pathname === "/services/digital") {
      return (
        <Fragment>
          <strong><Link href="/services"><a><span>Services</span></a></Link></strong> <span>Websites &amp; Digital Platforms</span>
        </Fragment>
      )
    } else if (pathname === "/about") {
      return "About"
    } else if (pathname === "/about/manifesto") {
      return (
        <Fragment>
          <strong><Link href="/about"><a><span>About</span></a></Link></strong> <span>Manifesto</span>
        </Fragment>
      )
    } else if (pathname === "/about/process") {
      return (
        <Fragment>
          <strong><Link href="/about"><a><span>About</span></a></Link></strong> <span>Process</span>
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

  return (
    <div className="breadcrumb">
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
