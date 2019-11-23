// Import nodes
import React from "react"
import Link from 'next/link'

// Render component
const Breadcrumb = props => {
  const { pathname } = props.router

  const renderBreadcrumbTrail = () => {
    if (pathname.startsWith("/projects")) {
      return <span>Projects</span>
    } else if (pathname.startsWith("/services")) {
      return <span>Services</span>
    } else if (pathname.startsWith("/about")) {
      return <span>About</span>
    } else if (pathname.startsWith("/contact")) {
      return <span>Contact</span>
    } else {
      return <span><strong>Mark Riggan</strong> Designer &amp; Developer</span>
    }
  }

  return (
    <div className="breadcrumb">
      {renderBreadcrumbTrail()}
    </div>
  )
}

export default Breadcrumb
