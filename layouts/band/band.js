// Import nodes
import React from "react"

// Import layouts
import Wrapper from '../wrapper'

// Render component
const Band = props => {

  const tag = props.div ? 'div' : 'section'
  const classes = props.className ? 'band ' + props.className : 'band'

  return (
    props.div ? (
      <div className={classes}>
        <Wrapper>
          {props.children}
        </Wrapper>
      </div>
    ) : (
      <section className={classes}>
        <Wrapper>
          {props.children}
        </Wrapper>
      </section>
    )
  )
}

export default Band
