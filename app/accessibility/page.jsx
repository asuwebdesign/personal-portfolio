import Sidekick from "@/components/sidekick/sidekick"
import Band from "@/layouts/band/band"
import Detour from '@/components/detour/detour'

export const metadata = {
  title: 'Accessibility - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Accessibility" title="Open commitment to accessibility." section />
          <Band>
            <p>Digital accessibility is the practice of ensuring that websites, web applications, and digital content can be used by the community who have a diverse range of hearing, movement, sight or cognitive abilities.</p>
            <p>We strive to adhere to the World Wide Web Consortium's Web Content Accessibility Guidelines (WCAG) 2.0, Level AA standards.</p>
          </Band>
        </article>
      </main>
      <Detour meta="Up Next" title="Let's create something together." link="/contact" />
    </>
  )
}