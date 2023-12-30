import Band from "@/layouts/band/band"
import Detour from '@/components/detour/detour'
import Sidekick from "@/components/sidekick/sidekick"

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
          <Band>
            <p>These terms and conditions ("Terms") govern your use of Mark Riggan's Personal Portfolio Website (referred to as the "Website"). By accessing and using the Website, you agree to abide by these Terms. If you do not agree with these Terms, please refrain from using the Website.</p>

            <h3>Use of Content:</h3>
            <p>The content on the Website, including but not limited to text, images, videos, graphics, and design elements, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works based on the content without the explicit permission of Mark Riggan.</p>

            <h3>Privacy:</h3>
            <p>Your use of the Website is subject to the Privacy Policy, which outlines how personal data and information are collected, stored, and used. Please review the Privacy Policy to understand how your data is handled.</p>

            <h3>User Conduct:</h3>
            <p>You agree not to use the Website for any purpose that is unlawful, unethical, or infringes upon the rights of others. This includes but is not limited to transmitting any harmful or malicious content, engaging in unauthorized access or data mining, or interfering with the Website's functionality.</p>

            <h3>Third-Party Links:</h3>
            <p>The Website may contain links to third-party websites or resources that are not owned or controlled by [Your Name]. These links are provided for your convenience, and [Your Name] is not responsible for the content, functionality, or security of these external sites. Your use of third-party websites is subject to their respective terms and policies.</p>

            <h3>Disclaimer of Warranties:</h3>
            <p>The Website is provided "as is" and [Your Name] makes no warranties, express or implied, regarding its accuracy, reliability, or availability. [Your Name] disclaims all liability for any errors or omissions in the content of the Website and any damages that may arise from your use of the Website.</p>

            <h3>Limitation of Liability:</h3>
            <p>In no event shall [Your Name] be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in any way connected with your use or inability to use the Website, even if [Your Name] has been advised of the possibility of such damages.</p>

            <h3>Changes to Terms and Website:</h3>
            <p>[Your Name] reserves the right to modify or update these Terms at any time. It is your responsibility to review these Terms periodically. [Your Name] also reserves the right to modify, suspend, or discontinue any aspect of the Website without notice.</p>

            <h3>Governing Law:</h3>
            <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>

            <h3>Contact:</h3>
            <p>If you have any questions or concerns about these Terms or the Website, please contact [Your Contact Information].</p>

            <p>By using the Personal Portfolio Website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>
          </Band>
        </article>
      </main>
      <Detour meta="Up Next" title="Let's create something together." link="/contact" />
    </>
  )
}