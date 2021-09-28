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
import LogoNCGov from '../../public/vectors/logo-ncgov.svg'
import LogoNCSU from '../../public/vectors/logo-ncsu.svg'
import LogoOracle from '../../public/vectors/logo-oracle.svg'
import LogoRedHat from '../../public/vectors/logo-redhat.svg'
import LogoLexisNexis from '../../public/vectors/logo-lexisnexis.svg'

// Render component
const Clients = props => {
  return (
    <section className="clients">
      <Wrapper>
        <div className="clients__meta">Select Clients</div>
        <h1 className="clients__title">These brands aren't trophies, they're friends that were met on the journey. </h1>
        <ul className="clients__list">
          <li className="clients__brand" data-client="bcbsnc"><LogoBCBSNC /></li>
          <li className="clients__brand" data-client="campbell"><LogoCampbell /></li>
          <li className="clients__brand" data-client="disney"><LogoDisney /></li>
          <li className="clients__brand" data-client="duke"><LogoDuke /></li>
          <li className="clients__brand" data-client="honda"><LogoHonda /></li>
          <li className="clients__brand" data-client="lexisnexis"><LogoLexisNexis /></li>
          <li className="clients__brand" data-client="ncgov"><LogoNCGov /></li>
          <li className="clients__brand" data-client="ncsu"><LogoNCSU /></li>
          <li className="clients__brand" data-client="oracle"><LogoOracle /></li>
          <li className="clients__brand" data-client="redhat"><LogoRedHat /></li>
        </ul>
      </Wrapper>
    </section>
  )
}

export default Clients
