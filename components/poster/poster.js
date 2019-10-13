// Import nodes
import React from "react"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import elements
import Image from '../../elements/image'

// Import styles
import './poster.scss'

// Render component
const Poster = props => {
  return (
    <div className="poster">
      <Wrapper>
        <Image src="https://source.unsplash.com/collection/190727" alt="" />
      </Wrapper>
    </div>
  )
}

export default Poster
