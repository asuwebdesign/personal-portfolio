import Sidekick from "@/components/sidekick/sidekick"
import Poster from "@/components/poster/poster"
import Process from "@/components/process/process"
import posterImage from '@/public/posters/poster-creative-process.jpg'
import Detour from '@/components/detour/detour'

export const metadata = {
  title: 'Creative Process - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Process" title="It always starts with listening to people." section />
          <Poster src={posterImage} alt="laptop screen webcam view diverse people engaged in group videocall" />
          <Process />
        </article>
      </main>
      <Detour meta="Up Next - Manifesto" title="Make something people love." link="/about/personal-manifesto" />
    </>
  )
}