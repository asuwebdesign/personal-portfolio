'use client'

// import styles from './band.module.scss'

export default function Band(props) {
  const tag = props.div ? 'div' : 'section'
  const classes = props.className ? 'band ' + props.className : 'band'

  return (
    props.div ? (
      <div className={classes}>
        <div className="wrapper">
          {props.children}
        </div>
      </div>
    ) : (
      <section className={classes}>
        <div className="wrapper">
          {props.children}
        </div>
      </section>
    )
  )
}