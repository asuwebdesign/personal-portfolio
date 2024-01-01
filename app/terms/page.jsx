import Band from "@/layouts/band/band"
import Detour from '@/components/detour/detour'
import Sidekick from '@/components/sidekick/sidekick'
import Link from 'next/link'
import Poster from "@/components/poster/poster"
import PosterSrc from '@/public/images/banners/banner-terms.jpg'

export const metadata = {
  title: 'Terms of Service - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Terms &amp; Conditions" title="Know your usage rights and restrictions." section />
          <Poster src={PosterSrc} alt="Person using MacBook Pro." />
          <Band className="band--legal">
            <p>These terms and conditions ("terms") govern your use of this website. By accessing and using the website, you agree to abide by these terms. If you do not agree with these terms, please refrain from using the website.</p>
          </Band>
          <Band className="band--legal">
            <h3>Use of content</h3>
            <p>The content on the website, including but not limited to text, images, videos, graphics, and design elements, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works based on the content without the explicit permission of Mark Riggan.</p>
          </Band>
          <Band className="band--legal">
            <h3>Privacy</h3>
            <p>Your use of the website is subject to the privacy policy, which outlines how personal data and information are collected, stored, and used. Please review the privacy policy to understand how your data is handled.</p>
          </Band>
          <Band className="band--legal">
            <h3>User conduct</h3>
            <p>You agree not to use the website for any purpose that is unlawful, unethical, or infringes upon the rights of others. This includes but is not limited to transmitting any harmful or malicious content, engaging in unauthorized access or data mining, or interfering with the Website's functionality.</p>
          </Band>
          <Band className="band--legal">
            <h3>Third-party links</h3>
            <p>The website may contain links to third-party websites or resources that are not owned or controlled by us. These links are provided for your convenience, and we are not responsible for the content, functionality, or security of these external sites. Your use of third-party websites is subject to their respective terms and policies.</p>
          </Band>
          <Band className="band--legal">
            <h3>Disclaimer of warranties</h3>
            <p>The website is provided "as is" and we make no warranties, express or implied, regarding its accuracy, reliability, or availability. We disclaim all liability for any errors or omissions in the content of the Website and any damages that may arise from your use of the Website.</p>
          </Band>
          <Band className="band--legal">
            <h3>Limitation of liability</h3>
            <p>In no event shall we be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in any way connected with your use or inability to use the Website, even if we have been advised of the possibility of such damages.</p>
          </Band>
          <Band className="band--legal">
            <h3>Changes to terms and website</h3>
            <p>We reserve the right to modify or update these terms at any time. It is your responsibility to review these terms periodically. We also reserve the right to modify, suspend, or discontinue any aspect of the website without notice.</p>
          </Band>
          <Band className="band--legal">
            <h3>Governing law</h3>
            <p>These terms shall be governed by and construed in accordance with the laws of North Carolina, without regard to its conflict of law principles.</p>
          </Band>
          <Band className="band--legal">
            <h3>Contact</h3>
            <p>If you have any questions or concerns about these terms or the website, please <Link href="/contact">contact us</Link>. By using the website, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>
          </Band>
        </article>
      </main>
      <Detour meta="Up Next" title="Let's create something together." link="/contact" />
    </>
  )
}