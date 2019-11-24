// Import nodes
import React from "react"
import Link from 'next/link'

// Import vectors
import Dots from '../../public/vectors/graphic-dots.svg'
import IconSolutionB from '../../public/vectors/solution-b.svg'
import IconSolutionC from '../../public/vectors/solution-c.svg'
import IconSolutionR from '../../public/vectors/solution-r.svg'
import IconSolutionW from '../../public/vectors/solution-w.svg'

// Render component
const Cover = props => {
  return (
    <header className="cover">
      <h1 className="cover__title">
        <span className="cover__title-client">Ubisoft &mdash;</span>
        <span className="cover__title-headline">Engaging worldwide gamers through branding and marketing.</span>
      </h1>

      <ul className="cover__services">
        <li><IconSolutionB /> Creative something</li>
        <li><IconSolutionB /> Creative something</li>
        <li><IconSolutionB /> Creative something</li>
        <li><IconSolutionB /> Creative something</li>
      </ul>

      <div className="cover__dots cover__dots--inverted">
        <Dots />
      </div>

      <div className="cover__photo">
        <img
          srcSet={require('../../public/images/cards/card-hwy55.jpg?resize').srcSet}
          src={require('../../public/images/cards/card-hwy55.jpg?resize').src}
          alt=""
        />
      </div>
    </header>
  )
}

export default Cover
