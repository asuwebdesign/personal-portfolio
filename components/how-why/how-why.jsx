'use client'

import Image from 'next/image'
import Link from 'next/link'
import ProcessTeaser from '@/public/images/cards/card-process.png'
import ManifestoTeaser from '@/public/images/cards/card-manifesto.jpg'

export default function HowWhy() {
  return (
    <div className="how-why">
      <div className="wrapper">
        <article className="teaser">
          <Link className="teaser__link" href="/about/creative-process">
            <h1 className="teaser__meta">Creative Process</h1>
            <div className="teaser__title">Simple. Delightful.</div>
            <p className="teaser__desc">Creating the future doesn't have to be complicated.</p>
            <div className="teaser__photo">
              <Image src={ProcessTeaser} alt="Illustration of creative process" priority="true" />
            </div>
          </Link>
        </article>
        <article className="teaser">
          <Link className="teaser__link" href="/about/personal-manifesto">
            <h1 className="teaser__meta">Personal Manifesto</h1>
            <div className="teaser__title">Design. Uncompromised.</div>
            <p className="teaser__desc">Make something people will love every day.</p>
            <div className="teaser__photo">
              <Image src={ManifestoTeaser} alt="Colorful sphere" priority="true" />
            </div>
          </Link>
        </article>
      </div>
    </div>
  )
}