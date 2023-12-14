import Cover from "@/components/cover/cover"
import Band from "@/layouts/band/band"
import Image from "next/image"
import Detour from '@/components/detour/detour'
import Vimeo from '@u-wave/react-vimeo'

import ProjectCover from '@/public/images/covers/cover-atlanticbt.png'
import ProjectLogo from '@/public/logos/logo-atlanticbt.svg'

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Cover
            class="cover__title--atlanticbt"
            client="Atlantic BT"
            headline="Revitalizing a digital agency's brand with an upgraded digital experience"
            image={ProjectCover}
            alt={"Description of the cover"}
          />
          <Band className="band--client" div>
            <div className="band__title-block">
              <ProjectLogo />
            </div>
            <div className="band__content">
              <div className="band__about">
                <h2>About Atlantic BT</h2>
                <p>Atlantic BT is a digital consulting and technology company based in Raleigh, North Carolina. With a focus on delivering innovative web solutions, digital experiences, and technology strategies, Atlantic BT collaborates with businesses to enhance their online presence, streamline operations, and drive growth. Offering services such as web development, design, e-commerce solutions, and digital marketing, Atlantic BT aims to empower organizations to navigate the digital landscape effectively and create impactful connections with their audiences.</p>
              </div>
              {/* <div className="band__skills">
                <h2>Skills provided</h2>
                <ul className="tags">
                  <li className="tag">Branding Strategy &amp; Identity</li>
                  <li className="tag">Creative &amp; Experience Design</li>
                  <li className="tag">Research, Data &amp; Analytics</li>
                  <li className="tag">Websites &amp; Digital Platforms</li>
                </ul>
              </div> */}
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
              <Image src="/images/projects/atlantic-bt/atlantic-bt--whiteboard.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--brand-diagram.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--culture-01.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--culture-02.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--culture-03.jpg" alt="" width={1920} height={1080} />
            </div>
          </Band> */}

          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">03</div>
              <h1 className="band__title">Logo</h1>
            </div>
            <div className="band__content">
              <h2>Designing the future.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              <Image src="/images/projects/atlantic-bt/atlantic-bt--icon-circles.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--wordmark.jpg" alt="" width={1920} height={1080} />
            </div>
          </Band>
          <Band className="band--split" div>
            <Image src="/images/projects/atlantic-bt/atlantic-bt--logo-color.jpg" alt="" width={1920} height={1080} />
            <Image src="/images/projects/atlantic-bt/atlantic-bt--logo-white.jpg" alt="" width={1920} height={1080} />
          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">03</div>
              <h1 className="band__title">Brand Book</h1>
            </div>
            <div className="band__content">
              <h2>Designing the future.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              <Image src="/images/projects/atlantic-bt/atlantic-bt--brand-book-01.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--brand-book-02.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--brand-book-03.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--brand-book-04.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--brand-book-05.jpg" alt="" width={1920} height={1080} />
            </div>
          </Band>
          <Band className="band--split" div>
            <Image className="image image--framed" src="/images/projects/atlantic-bt/atlantic-bt--brand-book-06.jpg" alt="" width={1920} height={1080} />
            <Image className="image image--framed" src="/images/projects/atlantic-bt/atlantic-bt--brand-book-07.jpg" alt="" width={1920} height={1080} />
            <Image className="image image--framed" src="/images/projects/atlantic-bt/atlantic-bt--brand-book-08.jpg" alt="" width={1920} height={1080} />
            <Image className="image image--framed" src="/images/projects/atlantic-bt/atlantic-bt--brand-book-09.jpg" alt="" width={1920} height={1080} />
          </Band>
          <Band className="band--split" div>

          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">03</div>
              <h1 className="band__title">Printed</h1>
            </div>
            <div className="band__content">
              <h2>Designing the future.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              <Image src="/images/projects/atlantic-bt/atlantic-bt--business-card.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--event-badge.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--posters.jpg" alt="" width={1920} height={1080} />
            </div>
          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">03</div>
              <h1 className="band__title">Ad campaigns</h1>
            </div>
            <div className="band__content">
              <h2>Designing the future.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              <Image src="/images/projects/atlantic-bt/atlantic-bt--hashtag-ad-01.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--hashtag-ad-02.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--hashtag-ad.jpg" alt="" width={1920} height={1080} />
            </div>
          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">03</div>
              <h1 className="band__title">Apparel</h1>
            </div>
            <div className="band__content">
              <h2>Designing the future.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              <Image src="/images/projects/atlantic-bt/atlantic-bt--hat.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--hoodie.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--tshirt-ad.jpg" alt="" width={1920} height={1080} />
              <Image src="/images/projects/atlantic-bt/atlantic-bt--tshirt-white-logo.jpg" alt="" width={1920} height={1080} />
            </div>
          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">03</div>
              <h1 className="band__title">Brand video</h1>
            </div>
            <div className="band__content">
              <h2>Designing the future.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              {/* <Vimeo video="361573248" responsive="true" /> */}
            </div>
          </Band>
          <Band className="band--numbered">
            <div className="band__title-block">
              <div className="band__number">03</div>
              <h1 className="band__title">Website</h1>
            </div>
            <div className="band__content">
              <h2>Designing the future.</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
              <Image src="/images/projects/atlantic-bt/atlantic-bt--homepage.png" alt="" width={1920} height={7861} />
            </div>
          </Band>





          {/*
        <Band className="band--split" div>
          <Image src="https://raw.githubusercontent.com/PaperTiger/figma-dark-ui/master/preview.jpg" alt="" width={1920} height={1080} layout="responsive" />
          <Image src="https://raw.githubusercontent.com/PaperTiger/figma-dark-ui/master/preview.jpg" alt="" width={1920} height={1080} layout="responsive" />
        </Band>

        <Band className="band--numbered">
          <div className="band__title-block">
            <div className="band__number">03</div>
            <h1 className="band__title">Strategy</h1>
          </div>
          <div className="band__content">
            <h2>Designing the future.</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.</p>
          </div>
        </Band>
        */}
        </article>
      </main>
      <Detour meta="Next Case Study" title="Hwy 55" link="/projects/hwy55" />
    </>
  )
}