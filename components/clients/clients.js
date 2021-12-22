// Import nodes
import React from "react"
import Link from 'next/link'

// Import layouts
import Wrapper from '../../layouts/wrapper'

// Import vectors
import LogoBCBSNC from '../../public/logos/logo-bcbsnc.svg'
import LogoCampbell from '../../public/logos/logo-campbell.svg'
import LogoDisney from '../../public/logos/logo-disney.svg'
import LogoDuke from '../../public/logos/logo-duke.svg'
import LogoHonda from '../../public/logos/logo-honda.svg'
import LogoNCGov from '../../public/logos/logo-ncgov.svg'
import LogoNCSU from '../../public/logos/logo-ncsu.svg'
import LogoOracle from '../../public/logos/logo-oracle.svg'
import LogoRedHat from '../../public/logos/logo-redhat.svg'
import LogoLexisNexis from '../../public/logos/logo-lexisnexis.svg'

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
