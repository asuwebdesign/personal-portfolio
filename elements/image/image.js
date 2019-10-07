// Import nodes
import React from "react"

// Import styles
import './image.scss'

// Render component
const Image = props => {
  const small = '300.jpg'
  const medium = '768.jpg'
  const large = '1280.jpg'

  return (
    <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} />
  )
}

export default Image
