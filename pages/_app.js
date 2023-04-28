import { Fragment } from 'react'
import App from 'next/app'
import NextNprogress from 'nextjs-progressbar'

// Import styles
import '../styles/main.scss'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Fragment>
        <Component {...pageProps} router={router} />
        <NextNprogress color={`#ff007e`} startPosition={0.1} stopDelayMs={200} height={2} />
      </Fragment>
    )
  }
}

export default MyApp
