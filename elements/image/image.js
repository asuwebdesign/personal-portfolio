// Import nodes
import React from "react"

// Import styles
import './image.scss'

// Render component
const Image = props => {
  const { src } = props

  // Sizes based off breakpoints
  const Img480 = src + '/480x1024'
  const Img600 = src + '/600x1024'
  const Img840 = src + '/840x1024'
  const Img960 = src + '/960x1024'
  const Img1280 = src + '/1280x1024'
  const Img1440 = src + '/1440x1024'
  const Img1600 = src + '/1600x1024'
  const Img1920 = src + '/1920x1024'

  return (
    <img
      src={Img480}
      srcSet={`
        ${Img600} 600w,
        ${Img840} 840w,
        ${Img960} 960w,
        ${Img1280} 1280w,
        ${Img1440} 1440w,
        ${Img1600} 1600w,
        ${Img1920} 1920w
      `}
    />
  )
}

export default Image
