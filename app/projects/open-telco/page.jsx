import Cover from "@/components/cover/cover"
import Band from "@/layouts/band/band"
import Image from "next/image"
import Detour from '@/components/detour/detour'

import ProjectCover from '@/public/images/covers/cover--open-telco.png'
import ProjectLogo from '@/public/logos/logo--redhat--color.svg'

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Cover
            class="cover__title--open-telco"
            client="Open Telco"
            headline="Revitalizing a digital agency's brand with an upgraded digital experience."
            image={ProjectCover}
            alt={"Description of the cover"}
          />
          <Band className="band--client" div>
            <div className="band__title-block">
              <ProjectLogo />
            </div>
            <div className="band__content">
              <div className="band__about">
                <h2>About Red Hat</h2>
                <p>Atlantic BT is one of North Carolina's largest full-service web technology firms specializing in Higher Education, local and state Government, and eCommerce industries.</p>
              </div>
              <div className="band__skills">
                <h2>Skills provided</h2>
                <ul className="tags">
                  <li className="tag">Branding Strategy &amp; Identity</li>
                  <li className="tag">Creative &amp; Experience Design</li>
                  <li className="tag">Research, Data &amp; Analytics</li>
                  <li className="tag">Websites &amp; Digital Platforms</li>
                </ul>
              </div>
            </div>
          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">01</div>
              <h1 className="band__title">Challenge</h1>
            </div>
            <div className="band__content">
              <h2>No, we don't sell phones.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            </div>
          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">02</div>
              <h1 className="band__title">Approach</h1>
            </div>
            <div className="band__content">
              <h2>Designing the future.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
            </div>
          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">03</div>
              <h1 className="band__title">Approach</h1>
            </div>
            <div className="band__content">
              <h2>Designing the future.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              <Image src="/images/projects/open-telco/opentelco--5g-core--disconnected-environment.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--5g-core--key-principles.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--5g-core--networking.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--5g-core--scalability.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--5g-core--service-assurance--openstack.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--5g-core--service-assurance.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--closed-captioning--enabled.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--cover.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--dashboard--preloading.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--dashboard.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--ran--open-ran--5g-call.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--ran--open-ran--default.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--ran--open-ran--intel-flexran.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--sustainability--intel-flexran--5g-ran-profile.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--sustainability--intel-flexran--building-blocks.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--sustainability--intel-flexran--kepler.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--compute.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--default.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--default3.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--floor-plan.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--partners.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--world-map.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--ztp--5g-ran--profile.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--ztp--default.png" alt="" width={1920} height={1080} />
              <Image src="/images/projects/open-telco/opentelco--ztp--tech-stack.png" alt="" width={1920} height={1080} />
            </div>
          </Band>
        </article>
      </main>
      <Detour meta="Next Case Study" title="PatternFly" link="/projects/patternfly" />
    </>
  )
}