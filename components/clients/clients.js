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
import './clients.scss'

// Render component
const Clients = props => {
  return (
    <section className="clients">
      <Wrapper>
        <div>Select Clients</div>
        <h1>These brands aren't trophies, they're friends that were met on the journey.</h1>
        <ul>
          <li><LogoBCBSNC /></li>
          <li><LogoCampbell /></li>
          <li><LogoDisney /></li>
          <li><LogoDuke /></li>
          <li><LogoHonda /></li>
          <li><LogoLulu /></li>
          <li><LogoNCGov /></li>
          <li><LogoNCSU /></li>
          <li><LogoOracle /></li>
          <li><LogoRedHat /></li>
        </ul>
      </Wrapper>
    </section>
  )
}

export default Clients
