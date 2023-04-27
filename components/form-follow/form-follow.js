// Import nodes
import React from "react"
import Link from 'next/link'
import Image from 'next/image'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import IconDribbble from '../../public/vectors/social-dribbble.svg'
import IconLinkedIn from '../../public/vectors/social-linkedin.svg'
import IconTwitter from '../../public/vectors/social-twitter.svg'
import IconMedium from '../../public/vectors/social-medium.svg'

// Render component
const FormFollow = props => {
  return (
    <div className="form-follow">
      <Wrapper>
        <section className="form">
          <div className="form__meta">Form</div>
          <h1 className="form__title">Let's connect. How can I help?</h1>
          <p className="form__desc">Whether you're looking to price out a project or just want to say hello, please feel free to send a message. I'll reach back out as soon as possible. Stay awesome!</p>

          <form className="form__fields" action="https://formspree.io/maynpggy" method="POST">
            <div className="form__field">
              <label htmlFor="form__field--first-name">First name</label>
              <input id="form__field--first-name" type="text" name="First name" required />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--last-name">Last name</label>
              <input id="form__field--last-name" type="text" name="Last name" required />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--email">Email</label>
              <input id="form__field--email" type="email" name="Email" required />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--message">What's on your mind?</label>
              <textarea id="form__field--message" name="Message" required></textarea>
            </div>
            <div className="form__actions">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </section>
        <section className="follow">
          <h1 className="follow__meta">Follow Me</h1>
          <div className="follow__title">When I'm not playing video games, I'm active on social. Follow me and stay in the loop.</div>
          <ul className="follow__list">
            <li className="follow__brand">
              <a href="https://dribbble.com/markr" target="_blank" rel="noreferrer">
                <IconDribbble />
                <span>Dribbble</span>
              </a>
            </li>
            <li className="follow__brand">
              <a href="https://medium.com/@Asuwebdesign" target="_blank" rel="noreferrer">
                <IconMedium />
                <span>Medium</span>
              </a>
            </li>
            <li className="follow__brand">
              <a href="https://www.linkedin.com/in/markriggan" target="_blank" rel="noreferrer">
                <IconLinkedIn />
                <span>LinkedIn</span>
              </a>
            </li>
            <li className="follow__brand">
              <a href="https://twitter.com/asuwebdesign" target="_blank" rel="noreferrer">
                <IconTwitter />
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </section>
      </Wrapper>
    </div>
  )
}

export default FormFollow
