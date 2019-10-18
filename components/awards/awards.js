// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import LogoBCBSNC from '../../public/vectors/logo-bcbsnc.svg'
import LogoCampbell from '../../public/vectors/logo-campbell.svg'
import LogoDisney from '../../public/vectors/logo-disney.svg'
import LogoDuke from '../../public/vectors/logo-duke.svg'
import LogoHonda from '../../public/vectors/logo-honda.svg'
import LogoLulu from '../../public/vectors/logo-lulu.svg'
import LogoNCGov from '../../public/vectors/logo-ncgov.svg'
import LogoNCSU from '../../public/vectors/logo-ncsu.svg'
import LogoOracle from '../../public/vectors/logo-oracle.svg'
import LogoRedHat from '../../public/vectors/logo-redhat.svg'

// Import styles
import './awards.scss'

// Render component
const Awards = props => {
  return (
    <section className="awards">
      <Wrapper>
        <div className="awards__meta">Awards &amp; Recognitions</div>
        <h1 className="awards__title">These brands aren't trophies, they're friends that were met on the journey.</h1>
        <ul className="awards__list">
          <li className="awards__brand"><LogoBCBSNC /></li>
          <li className="awards__brand"><LogoCampbell /></li>
          <li className="awards__brand"><LogoDisney /></li>
          <li className="awards__brand"><LogoDuke /></li>
          <li className="awards__brand"><LogoHonda /></li>
          <li className="awards__brand"><LogoLulu /></li>
          <li className="awards__brand"><LogoNCGov /></li>
          <li className="awards__brand"><LogoNCSU /></li>
          <li className="awards__brand"><LogoOracle /></li>
          <li className="awards__brand"><LogoRedHat /></li>
        </ul>
      </Wrapper>
    </section>
  )
}

export default Awards
