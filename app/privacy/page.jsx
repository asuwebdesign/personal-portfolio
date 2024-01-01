import Band from "@/layouts/band/band"
import Sidekick from "@/components/sidekick/sidekick"
import Link from 'next/link'
import Detour from '@/components/detour/detour'
import Poster from "@/components/poster/poster"
import PosterSrc from '@/public/images/banners/banner-privacy.jpg'

export const metadata = {
  title: 'Privacy Policy - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Privacy Policy" title="Know how we collect and use data." section />
          <Poster src={PosterSrc} alt="Technology security." />
          <Band className="band--legal">
            <h3>Effective Date: August 18, 2023</h3>
            <p>Welcome to Mark Riggan's personal portfolio website. Your privacy is important to us. This Privacy Policy outlines the types of personal information we collect, how we use and protect it, and your choices regarding your information. By using this website, you consent to the practices described in this policy.</p>
          </Band>
          <Band className="band--legal">
            <h3>Information we collect</h3>
            <p><strong>Personal Information:</strong> We may collect personal information such as your name, email address, and any other information you voluntarily provide when you use the contact form or subscribe to updates.</p>
            <p><strong>Usage Data:</strong> We may collect non-personal information, such as browser type, device type, operating system, and pages visited on the website. This information helps us improve the website's performance and user experience.</p>
          </Band>
          <Band className="band--legal">
            <h3>Use of information</h3>
            <p><strong>Communication:</strong> We may use your personal information to respond to your inquiries, provide information about our services, and send updates if you've subscribed to them.</p>
            <p><strong>Website Improvement:</strong> Non-personal information is used to analyze trends, track user movements on the website, and gather demographic information for aggregate use. This information helps us enhance the website's functionality and content.</p>
          </Band>
          <Band className="band--legal">
            <h3>Data sharing</h3>
            <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating the website and conducting our business. These parties are obligated to keep your information confidential.</p>
            <p>We may also share information if required by law or to protect our rights, privacy, safety, or property, as well as that of our users.</p>
          </Band>
          <Band className="band--legal">
            <h3>Cookies and tracking technologies</h3>
            <p>This website uses cookies and similar technologies to enhance user experience and gather usage information. You can adjust your browser settings to refuse cookies or notify you when cookies are being used.</p>
          </Band>
          <Band className="band--legal">
            <h3>Security</h3>
            <p>We employ reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
          </Band>
          <Band className="band--legal">
            <h3>Links to external sites</h3>
            <p>This website may contain links to external sites. We are not responsible for the privacy practices or content of these sites. We encourage you to review their privacy policies before providing any personal information.</p>
          </Band>
          <Band className="band--legal">
            <h3>Your choices</h3>
            <p>You can unsubscribe from email updates at any time by following the instructions provided in the emails. You can disable cookies through your browser settings, but this may affect your experience on the website.</p>
          </Band>
          <Band className="band--legal">
            <h3>Updates to this privacy policy</h3>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly. If you have any questions about this Privacy Policy or your personal information, please <Link href="/contact">contact us</Link>. By using this website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
          </Band>
        </article>
      </main>
      <Detour meta="Up Next" title="Let's create something together." link="/contact" />
    </>
  )
}