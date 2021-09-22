// Import nodes
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
const axios = require('axios')

// Import elements
import Button from '../../elements/button'

// Render component
const DribbblePosts = props => {
  const SHOTS_PER_PAGE = 4

  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isError, setIsError] = useState(false)
  const [postsFetched, setPostsFetched] = useState(false)
  const [dribbblePage, setDribbblePage] = useState(1)
  const [dribbblePosts, setDribbblePosts] = useState([])

  const placeholderArr = Array.from({ length: SHOTS_PER_PAGE }, (v, i) => i)

  React.useEffect(() => {
    let didCancel = false
    let dribbbleRes = {}

    async function getDribbblePosts() {
      try {
        if (!postsFetched) {
          dribbbleRes = await axios.get(
            `https://api.dribbble.com/v2/user/shots?access_token=5d8cb2b13590c1ca7f7c64ddce445aff8cc88695c6a8a6dc72e3c6ce46a6ba94&per_page=32`,
          )
          setPostsFetched(true)
        }

        if (!didCancel) {
          setDribbblePosts([...dribbblePosts, ...dribbbleRes.data])

          if (isLoading) setIsLoading(false)
          if (isLoadingMore) setIsLoadingMore(false)
        }
      } catch (error) {
        console.warn(error)
        if (!didCancel) {
          if (isLoading) setIsLoading(false)
          if (isLoadingMore) setIsLoadingMore(false)
          setPostsFetched(true)
          setIsError(true)
        }
      }
    }

    if (!postsFetched && !didCancel) {
      getDribbblePosts()
    }

    return () => {
      didCancel = true
    }
  }, [
    dribbblePosts,
    postsFetched,
    dribbblePage,
    isLoading,
    isError,
    isLoadingMore,
  ])

  return (
    <section className="shots">
      <div className="wrapper">
      {isError && <div>Sorry, something went wrong...</div>}
      {isLoading && placeholderArr.map((i) => <div key={i} />)}

      {!isLoading &&
        <header className="shots__header">
          <div className="shots__meta">Behind the Scenes</div>
          <h1 className="shots__title">Discover more of my work from Dribbble</h1>
        </header>
      }

      <div className="shots__list">
        {!isLoading && dribbblePosts.map((post) => (
          <article key={post.id} className="shot">
            <a className="shot__link" href={post.html_url} target="_blank">
              <figure className="shot__figure">
                <Image
                  src={post.images.hidpi}
                  alt={`screenshot of ${post.title}`}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={post.images.teaser} />
              </figure>
              <div className="shot__overlay">
                <h1 className="shot__title">{post.title}</h1>
              </div>
            </a>
          </article>
        ))}
      </div>

      {!isLoading &&
        <footer className="shots__footer">
          <Button label="See More Work" href="https://dribbble.com/markr" external />
        </footer>
      }
      </div>
    </section>
  )
}

export default DribbblePosts
