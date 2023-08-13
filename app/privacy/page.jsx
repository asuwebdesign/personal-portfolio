import Band from "@/layouts/band/band"
import Sidekick from "@/components/sidekick/sidekick"
import Detour from '@/components/detour/detour'

export const metadata = {
  title: 'Privacy Policy - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Privacy Policy" title="Your info is secure because I'll never sell." section />
          <Band>
            <p>Awwwards are given to the best CSS websites in the world from the top designers, agencies and bloggers working today. Winners receive recognition, prestige and media presence.</p>
            <p>By accessing our website and/or using our services, you agree to be bound by the following terms and conditions.</p>
          </Band>
        </article>
      </main>
      <Detour meta="Up Next" title="Let's create something together." link="/contact" />
    </>
  )
}