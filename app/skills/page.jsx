import Sidekick from "@/components/sidekick/sidekick"
import Services from "@/components/services/services"
import Detour from '@/components/detour/detour'

export const metadata = {
  title: 'Skills - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Services" title="Go from being viable to valuable." section />
          <Services />
        </article>
      </main>
      <Detour meta="Up Next" title="Branding Strategy &amp; Identity." link="/skills/branding-strategy-identity" />
    </>
  )
}