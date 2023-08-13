import Sidekick from "@/components/sidekick/sidekick"
import Poster from "@/components/poster/poster"
import Manifesto from "@/components/manifesto/manifesto"
import posterImage from '@/public/posters/poster-personal-manifesto.jpg'
import Detour from '@/components/detour/detour'

export const metadata = {
  title: 'Manifesto - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Manifesto" title="Make something people love." section />
          <Poster src={posterImage} alt="Cool guy holding smartphone using web app casual wearing denim outfit isolated from violet background." />
          <Manifesto />
        </article>
      </main>
      <Detour meta="Up Next - Contact" title="Let's create something together." link="/contact" />
    </>
  )
}