import Sidekick from "@/components/sidekick/sidekick"
import Band from "@/layouts/band/band"
import Detour from '@/components/detour/detour'

export const metadata = {
  title: 'Accessibility - Mark Riggan',
  description: '',
}

export default function Page() {
  return (
    <>
      <main>
        <article>
          <Sidekick meta="Accessibility" title="Open commitment to accessibility." section />
          <Band>
            <h3>Last Updated: August 18, 2023</h3>
            <p>At Mark Riggan's personal portfolio website, we are committed to ensuring that our website is accessible to everyone, regardless of disabilities or impairments. We strive to provide a user-friendly experience for all visitors, including those with visual, auditory, motor, and cognitive impairments. We believe in inclusive design and are continuously working to improve the accessibility of our website.</p>
            
            <h3>Our Efforts Toward Accessibility:</h3>
            <ul>
              <li>Alternative Text: We aim to provide alternative text descriptions for all images on the website, making visual content understandable to screen readers.</li>
              <li>Keyboard Navigation: Our website is designed to be navigable using a keyboard alone, ensuring that individuals who cannot use a mouse can access all content.</li>
              <li>Readable Fonts and Contrast: We prioritize legibility by using clear and readable fonts, along with high contrast between text and background to make the content easily distinguishable.</li>
              <li>Responsive Design: Our website is built with a responsive design that adapts to various screen sizes, ensuring content remains accessible on different devices.</li>
              <li>Captions and Transcripts: Whenever video or audio content is presented, we strive to provide captions and transcripts to make the content accessible to individuals with hearing impairments.</li>
            </ul>
            
            <h3>Ongoing Accessibility Improvements:</h3>
            <p>We are actively working to enhance the accessibility of our website, including regular accessibility audits and user testing to identify and address potential issues. We aim to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to make our website more accessible.</p>
            
            <h3>Feedback and Assistance:</h3>
            <p>If you encounter any accessibility barriers while using our website or have suggestions for improvement, please contact us at [your contact information]. Your feedback is invaluable to us as we continue to enhance the accessibility of our website.</p>
            <p><strong>Third-Party Content:</strong> While we strive to ensure that our content meets accessibility standards, some third-party content or components may not be fully accessible. We encourage you to provide feedback on any accessibility issues you encounter with these elements.</p>
            
            <h3>External Accessibility Resources:</h3>
            <p>If you're seeking additional information or resources to improve your browsing experience, various browser extensions and assistive technologies are available that can help adjust settings based on your needs.</p>
            
            <h3>Future Commitment:</h3>
            <p>We are committed to maintaining and improving the accessibility of our website. As technology evolves and accessibility standards progress, we will continue to enhance our website to provide an inclusive experience for all users.</p>
            <p>By visiting our website, you acknowledge our commitment to accessibility and our ongoing efforts to improve it. We welcome your input to help us achieve this goal and create a positive experience for every visitor.</p>
            <p>If you have any questions or suggestions regarding the accessibility of our website, please reach out to us at [your contact information].</p>
            <p>Thank you for your interest in Mark Riggan's personal portfolio website.</p>
          </Band>
        </article>
      </main>
      <Detour meta="Up Next" title="Let's create something together." link="/contact" />
    </>
  )
}