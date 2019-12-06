// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import IconDribbble from '../../public/vectors/social-dribbble.svg'
import IconLinkedIn from '../../public/vectors/social-linkedin.svg'
import IconTwitter from '../../public/vectors/social-twitter.svg'

// Render component
const FormFollow = props => {
  return (
    <div className="form-follow">
      <Wrapper>
        <section className="form">
          <div className="form__meta">Form</div>
          <h1 className="form__title">Here's a form to tell me something.</h1>
          <p className="form__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>

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
              <label htmlFor="form__field--job-title">Job title</label>
              <input id="form__field--job-title" type="text" name="Job title" />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--company">Company</label>
              <input id="form__field--company" type="text" name="Company" />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--email">Email</label>
              <input id="form__field--email" type="email" name="Email" required />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--message">How can I help you?</label>
              <textarea id="form__field--message" name="Message"></textarea>
            </div>
            <div className="form__actions">
              <input type="submit" value="Get in touch" />
            </div>
          </form>
        </section>
        <section className="follow">
          <h1 className="follow__meta">Follow Me</h1>
          <div className="follow__title">I'm social. Follow me and stay in the loop.</div>
          <ul className="follow__list">
            <li className="follow__brand">
              <a href="https://dribbble.com/markr" target="_blank">
                <IconDribbble />
                <span>Dribbble</span>
              </a>
            </li>
            <li className="follow__brand">
              <a href="https://www.linkedin.com/in/markriggan" target="_blank">
                <IconLinkedIn />
                <span>LinkedIn</span>
              </a>
            </li>
            <li className="follow__brand">
              <a href="https://twitter.com/asuwebdesign" target="_blank">
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
