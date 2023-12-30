import Sidekick from "@/components/sidekick/sidekick"
import Projects from "@/components/work/work"
import DribbblePosts from "@/components/dribbble-posts/dribbble-posts"

export const metadata = {
  title: 'Projects - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Projects" title="Digital canvas of pixels and passion." section />
          <Projects />
          <DribbblePosts />
        </article>
      </main>
    </>
  )
}