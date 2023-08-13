'use client'

import Image from 'next/image'
import Story01Photo from '@/public/images/articles/article-four-simple-words.jpg'
import Story02Photo from '@/public/images/articles/article-sapphire.png'
import Story03Photo from '@/public/images/articles/article-disney-world.jpg'

export default function News() {
  return (
    <section className="news">
      <div className="wrapper">
        <div className="news__meta">News + Views</div>
        <h1 className="news__title">Stories, insights, and inspiration to elevate your mind and soul.</h1>
        <div className="news__list">
          <article className="news__story">
            <a className="news__story-link" href="https://medium.com/swlh/four-simple-words-thatll-drive-you-to-being-a-better-creative-person-82337b07ac57" target="_blank" rel="noreferrer">
              <div className="news__story-photo">
                <Image src={Story01Photo} alt="" fill placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div>
                <div className="news__story-category">Inspiration</div>
                <h1 className="news__story-title">Four simple words that'll drive you to being a better creative person.</h1>
              </div>
            </a>
          </article>
          <article className="news__story">
            <a className="news__story-link" href="https://medium.com/swlh/reimagining-digital-strategy-and-how-we-document-data-architecture-9c40f94454d8" target="_blank" rel="noreferrer">
              <div className="news__story-photo">
                <Image src={Story02Photo} alt="" fill placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div>
                <div className="news__story-category">Strategy</div>
                <h1 className="news__story-title">Reimagining digital strategy and how we document data architecture</h1>
              </div>
            </a>
          </article>
          <article className="news__story">
            <a className="news__story-link" href="https://medium.com/swlh/how-good-design-shows-your-brand-is-credible-22d497e5a7ac" target="_blank" rel="noreferrer">
              <div className="news__story-photo">
                <Image src={Story03Photo} alt="" fill placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div>
                <div className="news__story-category">Branding</div>
                <h1 className="news__story-title">How your brand's credibility starts with great visual design</h1>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}