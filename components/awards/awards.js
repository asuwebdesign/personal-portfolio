// ============================================================================
// Import data
// ============================================================================
import { awards } from '../../data/awards'


// ============================================================================
// Import layouts
// ============================================================================
import Wrapper from '../../layouts/wrapper'


// ============================================================================
// Render component
// ============================================================================
const Awards = () => {
  return (
    <section className="awards">
      <Wrapper>
        <h1 className="awards__meta">Awards &amp; Recognitions</h1>
        <div className="awards__title">Honored excellence in innovation, ingenuity, and technical achievement.</div>
        <ul className="awards__list">
          {awards.map((award, key) => {
            return (
              <li key={key} className="award">
                <div className="award__header">
                  <div className="award__title">{award.title}</div>
                  <div className="award__subtitle">{award.subtitle}</div>
                </div>                
                <div className="award__meta">
                  <div className="award__organization">{award.organization}</div>
                  <div className="award__issued">{award.date}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Awards
