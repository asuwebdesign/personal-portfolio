'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()

  // states
  const [hideBreadcrumb, setHideBreadcrumb] = useState('')

  // declared animations
  const motionLabel = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -32,
    }
  }

  useScrollPosition(({ prevPos, currPos }) => {
    (currPos.y <= -64) ? setHideBreadcrumb('breadcrumb--hide') : setHideBreadcrumb(false)
  }, [hideBreadcrumb])

  return (
    <div className={`breadcrumb ${hideBreadcrumb}`}>
      <motion.div variants={motionLabel} initial="hidden" animate="visible" transition={{ ease: [0.860, 0.000, 0.070, 1], duration: 0.2, delay: 0.1 }}>

        {pathname === '/' && <><strong>Mark Riggan</strong> <span>Designer &amp; Developer</span></>}

        {pathname === '/projects' && <>Projects</>}
        {pathname === '/projects/open-telco' && <><strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Open Telco</span></>}
        {pathname === '/projects/patternfly' && <><strong><Link href="/projects"><span>Projects</span></Link></strong> <span>PatternFly</span></>}
        {pathname === '/projects/lexis-plus' && <><strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Lexis Plus</span></>}
        {pathname === '/projects/lexisnexis-design-system' && <><strong><Link href="/projects"><span>Projects</span></Link></strong> <span>LexisNexis Design System</span></>}
        {pathname === '/projects/klearly' && <><strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Klearly</span></>}
        {pathname === '/projects/colorshark' && <><strong><Link href="/projects"><span>Projects</span></Link></strong> <span>ColorShark</span></>}
        {pathname === '/projects/atlantic-bt' && <><strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Atlantic BT</span></>}
        {pathname === '/projects/hwy55' && <><strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Hwy 55</span></>}
        {pathname === '/projects/training-industry' && <><strong><Link href="/projects"><span>Projects</span></Link></strong> <span>Training Industry</span></>}

        {pathname === '/skills' && <>Skills</>}
        {pathname === '/skills/branding-strategy-identity' && <><strong><Link href="/skills"><span>Skills</span></Link></strong> <span>Branding Strategy &amp; Identity</span></>}
        {pathname === '/skills/creative-experience-design' && <><strong><Link href="/skills"><span>Skills</span></Link></strong> <span>Creative &amp; Experience Design</span></>}
        {pathname === '/skills/research-data-analytics' && <><strong><Link href="/skills"><span>Skills</span></Link></strong> <span>Research, Data &amp; Analytics</span></>}
        {pathname === '/skills/websites-digital-platforms' && <><strong><Link href="/skills"><span>Skills</span></Link></strong> <span>Websites &amp; Digital Platforms</span></>}

        {pathname === '/about' && <>About</>}
        {pathname === '/about/manifesto' && <><strong><Link href="/about"><span>About</span></Link></strong> <span>Personal Manifesto</span></>}
        {pathname === '/about/process' && <><strong><Link href="/about"><span>About</span></Link></strong> <span>Creative Process</span></>}

        {pathname === '/contact' && <>Contact</>}

        {pathname === '/terms' && <>Terms and conditions</>}
        {pathname === '/privacy' && <>Privacy policy</>}
        {pathname === '/accessibility' && <>Accessibility</>}

      </motion.div>
    </div>
  )
}