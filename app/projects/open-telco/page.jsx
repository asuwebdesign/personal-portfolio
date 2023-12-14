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
            headline="Showcasing open source technologies for the telecommunications industry"
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
                <p>Red Hat is a renowned software company recognized for its leadership in open-source solutions and technologies. Founded in 1993, the company is renowned for developing the widely used Red Hat Enterprise Linux operating system, built on open-source foundations and valued for its security and reliability. Beyond its iconic Linux distribution, Red Hat offers a diverse array of software, spanning cloud computing, containerization, middleware, and more, catering to enterprises seeking scalable and innovative solutions.</p>
              </div>
            </div>
          </Band>
          {/* <Band className="band--numbered">
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
          </Band> */}
          <Band div>
            <Image src="/images/projects/open-telco/opentelco--dashboard--preloading.png" alt="" width={1920} height={1080} />
          </Band>
          <Band div>
            <Image src="/images/projects/open-telco/opentelco--dashboard.png" alt="" width={1920} height={1080} />
          </Band>
          <Band className="band--split" div>
            <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--compute.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--default.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--default3.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--floor-plan.png" alt="" width={1920} height={1080} />
          </Band>
          <Band className="band--split" div>
            <Image src="/images/projects/open-telco/opentelco--5g-core--disconnected-environment.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--5g-core--key-principles.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--5g-core--networking.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--5g-core--scalability.png" alt="" width={1920} height={1080} />
          </Band>
          <Band div>
            <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--world-map.png" alt="" width={1920} height={1080} />
          </Band>
          <Band className="band--split" div>
            <Image src="/images/projects/open-telco/opentelco--5g-core--service-assurance--openstack.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--5g-core--service-assurance.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--closed-captioning--enabled.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--cover.png" alt="" width={1920} height={1080} />
          </Band>
          <Band div>
            <Image src="/images/projects/open-telco/opentelco--ztp--5g-ran--profile.png" alt="" width={1920} height={1080} />
          </Band>
          <Band className="band--split" div>
            <Image src="/images/projects/open-telco/opentelco--ran--open-ran--5g-call.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--ran--open-ran--default.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--sustainability--intel-flexran--5g-ran-profile.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--sustainability--intel-flexran--building-blocks.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--sustainability--intel-flexran--kepler.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--telco-solutions-lab--partners.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--ztp--default.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/open-telco/opentelco--ztp--tech-stack.png" alt="" width={1920} height={1080} />
          </Band>
        </article>
      </main>
      <Detour meta="Next Case Study" title="PatternFly" link="/projects/patternfly" />
    </>
  )
}