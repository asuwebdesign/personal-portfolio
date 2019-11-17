// Import nodes
import React, { Fragment } from "react"

// Render component
const Image = props => {
  const { src, alt } = props

  // Sizes based off breakpoints
  const ImgBase = src + '?lqip'
  const Img480 = src
  const Img600 = src
  const Img840 = src
  const Img960 = src
  const Img1280 = src
  const Img1440 = src
  const Img1600 = src
  const Img1920 = src

  return (
    <Fragment>
      {/*
        <img src={require('../../public/images/sample.jpg?lqip')} />
        <img src={require('../../public/images/sample.jpg?webp')} />
      <picture>
        <source media="(min-width: 500w)" srcset="dog-500.png" sizes="100vw" />
        <source media="(min-width: 800w)" srcset="dog-800.png" sizes="100vw" />
        <source media="(min-width: 1000w)" srcset="dog-1000.png"	sizes="800px" />
        <source media="(min-width: 1400w)" srcset="dog-1400.png"	sizes="800px" />
        <img src="dog.png" alt="A dog image" />
      </picture>
      */}

      <img
        src={ImgBase}
        srcSet={`
          ${Img480} 480w,
          ${Img600} 600w,
          ${Img840} 840w,
          ${Img960} 960w,
          ${Img1280} 1280w,
          ${Img1440} 1440w,
          ${Img1600} 1600w,
          ${Img1920} 1920w
        `}
        loading="lazy"
        alt={alt}
      />
    </Fragment>
  )
}

export default Image
