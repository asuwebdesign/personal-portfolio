import App from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import localFont from 'next/font/local'

const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/gilroy-light-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy-semibold-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy-bold-webfont.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy-extrabold-webfont.woff2',
      weight: '700',
      style: 'normal',
    }
  ]
})

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
      <>
        <Component {...pageProps} router={router} />
        <NextNprogress color={`#ff007e`} startPosition={0.1} stopDelayMs={200} height={2} />
      </>
    )
  }
}

export default MyApp
