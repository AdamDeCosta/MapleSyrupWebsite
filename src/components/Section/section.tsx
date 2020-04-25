import React from "react"
import styles from "./section.module.css"

interface Section {
  style?: React.CSSProperties
  children: React.ReactNode
  className?: string
}

const Section: React.FC<Section> = ({ style, children, className = "" }) => (
  <section style={style} className={`${styles.section} ${className}`}>
    <div className={`${styles.description}`}>
      {children}
    </div>
  </section>
)

export default Section;
