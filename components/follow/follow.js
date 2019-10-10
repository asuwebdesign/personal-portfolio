// Import nodes
import React from "react"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import IconDribbble from '../../public/vectors/social-dribbble.svg'
import IconLinkedIn from '../../public/vectors/social-linkedin.svg'
import IconTwitter from '../../public/vectors/social-twitter.svg'

// Import styles
import './follow.scss'

// Render component
const Follow = props => {
  return (
    <section className="follow">
      <Wrapper>
        <h1 className="follow__meta">Follow Me</h1>
        <div className="follow__title">I'm social. Follow me and stay in the loop.</div>
        <ul className="follow__list">
          <li className="follow__brand"><a href="#" target="_blank"><IconDribbble /></a></li>
          <li className="follow__brand"><a href="#" target="_blank"><IconLinkedIn /></a></li>
          <li className="follow__brand"><a href="#" target="_blank"><IconTwitter /></a></li>
        </ul>
      </Wrapper>
    </section>
  )
}

export default Follow
