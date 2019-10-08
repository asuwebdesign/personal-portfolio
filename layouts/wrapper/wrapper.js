// Import nodes
import React from "react"

// Import styles
import './wrapper.scss'

// Render component
const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
}

export default Wrapper
