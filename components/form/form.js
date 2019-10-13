// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import styles
import './form.scss'

// Render component
const Form = props => {
  return (
    <section className="form">
      <Wrapper>
        <div className="form__container">
          <div className="form__meta">Form</div>
          <h1 className="form__title">Here's a form to tell me something.</h1>
          <p className="form__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>

          <form className="form__fields" name="contact" method="POST">
            <div className="form__field">
              <label htmlFor="form__field--first-name">First name</label>
              <input id="form__field--first-name" type="text" required />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--last-name">Last name</label>
              <input id="form__field--last-name" type="text" required />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--job-title">Job title</label>
              <input id="form__field--job-title" type="text" />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--company">Company</label>
              <input id="form__field--company" type="text" />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--email">Email</label>
              <input id="form__field--email" type="email" required />
            </div>
            <div className="form__field">
              <label htmlFor="form__field--message">How can I help you?</label>
              <textarea id="form__field--message"></textarea>
            </div>
            <div className="form__actions">
              <input type="submit" value="Get in touch" />
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  )
}

export default Form
