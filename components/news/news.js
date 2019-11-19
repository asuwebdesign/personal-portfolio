// Import nodes
import React from "react"

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import elements
import Image from '../../elements/image'

// Render component
const News = props => {
  return (
    <section className="news">
      <Wrapper>
        <div className="news__meta">News + Views</div>
        <h1 className="news__title">Explore recent happenings, press, and perspectives.</h1>
        <div className="news__list">
          <article className="news__story">
            <a className="news__story-link" href="https://medium.com/swlh/four-simple-words-thatll-drive-you-to-being-a-better-creative-person-82337b07ac57" target="_blank">
              <div className="news__story-photo">
                <img
                  srcSet={require('../../public/images/articles/article-four-simple-words.jpeg?resize&sizes[]=300&sizes[]=600&sizes[]=1000').srcSet}
                  src={require('../../public/images/articles/article-four-simple-words.jpeg').src}
                  alt=""
                />
              </div>
              <div className="news__story-category">Inspiration</div>
              <h1 className="news__story-title">Four simple words that’ll drive you to being a better creative person.</h1>
            </a>
          </article>
          <article className="news__story">
            <a className="news__story-link" href="https://medium.com/swlh/reimagining-digital-strategy-and-how-we-document-data-architecture-9c40f94454d8" target="_blank">
              <div className="news__story-photo">
                <img src="https://miro.medium.com/max/7680/1*gkCBdO6ek2q8j0-UHIsCSw.png" alt="" />
              </div>
              <div className="news__story-category">Strategy</div>
              <h1 className="news__story-title">Reimagining digital strategy and how we document data architecture</h1>
            </a>
          </article>
          <article className="news__story">
            <a className="news__story-link" href="https://medium.com/swlh/how-good-design-shows-your-brand-is-credible-22d497e5a7ac" target="_blank">
              <div className="news__story-photo">
                <img src="https://miro.medium.com/max/2560/1*p6rsPUKIyxo0Z7NZx9ZvXw.jpeg" alt="" />
              </div>
              <div className="news__story-category">Branding</div>
              <h1 className="news__story-title">How your brand’s credibility starts with great visual design</h1>
            </a>
          </article>
        </div>
      </Wrapper>
    </section>
  )
}

export default News
