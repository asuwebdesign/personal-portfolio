// Import nodes
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Import layouts
import Layout from '../layouts/layout'

// Render component
const Contact = props => (
  <Layout>
    <Head>
      <title>Contact</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
    </Head>

    <article>
      <header>
        <h1>Contact</h1>
      </header>

      <section>
        <div>Follow Me</div>
        <h1>I'm social. Follow me and stay in the loop.</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
        <ul>
          <li><Link href="#"><a>Behance</a></Link></li>
          <li><Link href="#"><a>Behance</a></Link></li>
          <li><Link href="#"><a>Behance</a></Link></li>
          <li><Link href="#"><a>Behance</a></Link></li>
        </ul>
      </section>

      <section>
        <div>Form</div>
        <h1>Here's a form to tell me something.</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>

        <form className="form" name="contact" method="POST">
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
      </section>
    </article>
  </Layout>
)

export default Contact
