// Import nodes
import React from "react"

// Import layouts
import Wrapper from '../wrapper'

// Render component
const Band = props => {
  return (
    <section className={`band ${props.className}`}>
      <Wrapper>
        {props.children}
      </Wrapper>
    </section>
  )
}

export default Band
