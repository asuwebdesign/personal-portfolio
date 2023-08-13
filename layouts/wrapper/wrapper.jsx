'use client'

import styles from './wrapper.module.scss'

export default function Wrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}