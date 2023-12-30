import Sidekick from "@/components/sidekick/sidekick"
import Poster from "@/components/poster/poster"
import Band from "@/layouts/band/band"
import Image from "next/image"
import IconSolutionB from '@/public/vectors/solution-b.svg'
import Button from "@/elements/button/button"
import PosterSrc from '@/public/images/banners/banner-branding.jpg'
import Detour from '@/components/detour/detour'

export const metadata = {
  title: 'Branding Strategy &amp; Identity - Skills - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick title="Create a brand as bold as your vision." />
          <Poster src={PosterSrc} alt="Sample text for the photo." />
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">01</div>
              <h1 className="band__title">About</h1>
            </div>
            <div className="band__content">
              <h2>Why branding matters.</h2>
              <p>{`In today's digitally-driven world, brands must recognize their customers as users, not just passive consumers of media. As a result, I extend the traditional brand framework of mission, vision and beliefs to include a brand's capability: what the brand must enable users to achieve and also the problem the brand solves for people.`}</p>
              <Image src="/images/pictures/picture-branding.jpg" alt="" width={1920} height={1080} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">02</div>
              <h1 className="band__title">Services</h1>
            </div>
            <div className="band__content">
              <h2>Show customers what makes you...you.</h2>
              <p>Branding is what gives you a reputation and, ultimately, a future. Because of the importance of branding, businesses and organizations should build a strong brand right from the start so they can consistently maintain it as they grow.</p>
              <p>Who are you as a brand, exactly? If you don’t know, then neither will your audience. Build your identity by establishing brand-defining keywords and using these words to shape the company voice, tone and aesthetic.</p>
              <ul className="meta-list">
                <li className="meta-list__item">Brand positioning</li>
                <li className="meta-list__item">Brand governance</li>
                <li className="meta-list__item">Brand tracking</li>
                <li className="meta-list__item">Brand architecture</li>
                <li className="meta-list__item">Brand capability development</li>
                <li className="meta-list__item">Naming</li>
                <li className="meta-list__item">Integrated marketing strategy</li>
                <li className="meta-list__item">Brand identity and design</li>
                <li className="meta-list__item">Employee engagement</li>
              </ul>
            </div>
          </Band>
          <Band className="band--service-callout">
            <div className="band__callout-icon"><IconSolutionB /></div>
            <div className="band__callout-contents">
              <div className="band__callout-meta">Branding Strategy &amp; Identity</div>
              <h1 className="band__callout-title">Anybody can make your brand look good. What about making your brand matter?</h1>
              <p className="band__callout-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              <Button label="Get in Touch" href="/contact" />
            </div>
          </Band>
        </article>
      </main>
      <Detour meta="Up Next" title="Creative &amp; Experience Design." link="/skills/creative-experience-design" />
    </>
  )
}