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

// Render component
const Clients = props => {
  return (
    <section className="clients">
      <Wrapper>
        <div className="clients__meta">Select Clients</div>
        <h1 className="clients__title">These brands aren't trophies, they're friends that were met on the journey. </h1>
        <ul className="clients__list">
          <li className="clients__brand"><LogoBCBSNC /></li>
          <li className="clients__brand"><LogoCampbell /></li>
          <li className="clients__brand"><LogoDisney /></li>
          <li className="clients__brand"><LogoDuke /></li>
          <li className="clients__brand"><LogoHonda /></li>
          <li className="clients__brand"><LogoLulu /></li>
          <li className="clients__brand"><LogoNCGov /></li>
          <li className="clients__brand"><LogoNCSU /></li>
          <li className="clients__brand"><LogoOracle /></li>
          <li className="clients__brand"><LogoRedHat /></li>
        </ul>
      </Wrapper>
    </section>
  )
}

export default Clients
