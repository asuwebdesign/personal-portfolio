import Cover from "@/components/cover/cover"
import Band from "@/layouts/band/band"
import Image from "next/image"
import Detour from '@/components/detour/detour'

import ProjectCover from '@/public/images/covers/cover-atlanticbt.png'
import ProjectLogo from '@/public/logos/logo--patternfly--color.svg'

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Cover
            class="cover__title--patternfly"
            client="PatternFly 5"
            headline="Redefining the visual and interactive experiences of open source user interfaces"
            image=""
            alt={"Description of the cover"}
          />
          <Band className="band--client" div>
            <div className="band__title-block">
              <ProjectLogo />
            </div>
            <div className="band__content">
              <div className="band__about">
                <h2>About PatternFly</h2>
                <p>PatternFly is an open-source design system and UI framework that simplifies and accelerates the creation of consistent and user-friendly web applications. Developed collaboratively by Red Hat and the open-source community, PatternFly provides a set of design patterns, components, and guidelines that ensure a cohesive visual and interactive experience across applications. It empowers designers and developers to efficiently build responsive and accessible interfaces, fostering a seamless user experience while saving time and effort in the development process.</p>
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
          <Band div>
            <Image src="/images/projects/patternfly/pf5--ocp--dashboard.png" alt="" width={1920} height={1080} />
          </Band>
          <Band className="band--split" div>
            <Image src="/images/projects/patternfly/pf5--ocp--signin.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--installed.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--networking.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--observe.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--operators.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--storage.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--workloads.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp-compute.png" alt="" width={1920} height={1080} />
          </Band>
          <Band div>
            <Image src="/images/projects/patternfly/pf5--hcc--home--dark.png" alt="" width={1920} height={1080} />
          </Band>
          <Band className="band--split" div>
            <Image src="/images/projects/patternfly/pf5--hcc--signin--username--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--ansible--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--console--app-services--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--openshift--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--rhel--dark.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--ocp--builds.png" alt="" width={1920} height={1080} />
          </Band>
          <Band className="band--split" div>
            <Image src="/images/projects/patternfly/pf5--hcc--signin--username--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--ansible--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--app-services--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--console--rhel--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--home--light.png" alt="" width={1920} height={1080} />
            <Image src="/images/projects/patternfly/pf5--hcc--openshift--light.png" alt="" width={1920} height={1080} />
          </Band>
        </article>
      </main>
      <Detour meta="Next Case Study" title="Lexis Plus" link="/projects/lexis-plus" />
    </>
  )
}