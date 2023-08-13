import Sidekick from "@/components/sidekick/sidekick"
import FormFollow from "@/components/form-follow/form-follow"

export const metadata = {
  title: 'Contact - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Contact" title="Let's create something together." section />
          <FormFollow />
        </article>
      </main>
    </>
  )
}