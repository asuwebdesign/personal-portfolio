import Hero from '@/components/hero/hero'
import Projects from '@/components/work-latest/work'
import Nutshell from '@/components/nutshell/nutshell'
import Clients from '@/components/clients/clients'
import News from '@/components/news/news'
import Detour from '@/components/detour/detour'

export const metadata = {
  title: 'Mark Riggan | Creative Digital Designer &amp; Developer',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Hero />
          <Projects />
          <Nutshell />
          <Clients />
          <News />
        </article>
      </main>
      <Detour meta="Up Next - Projects" title="Selected brands &amp; digital products." link="/projects" />
    </>
  )
}