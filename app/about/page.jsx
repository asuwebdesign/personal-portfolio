import Sidekick from "@/components/sidekick/sidekick"
import Poster from "@/components/poster/poster"
import Skills from "@/components/skills/skills"
import HowWhy from "@/components/how-why/how-why"
import Awards from "@/components/awards/awards"
import PosterSrc from '@/public/images/pictures/picture-ninja-background.png'
import PosterForeground from '@/public/images/pictures/picture-ninja.png'
import Detour from '@/components/detour/detour'

export const metadata = {
  title: 'About - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="About" title="Pixels, code &amp; tons of video games." section />
          <Poster
            className="poster--about"
            src={PosterSrc}
            foreground={PosterForeground}
            foregroundWidth={1483}
            foregroundHeight={1746}
            alt="Sample text for the photo."
          />
          <Skills />
          <HowWhy />
          <Awards />
        </article>
      </main>
      <Detour meta="Up Next - Process" title="It always starts with listening to people." link="/about/creative-process" />
    </>
  )
}