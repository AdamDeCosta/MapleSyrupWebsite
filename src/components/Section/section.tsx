import React from "react"
import sectionStyles from "./section.module.css"

interface Section {
  style?: React.CSSProperties
  children: React.ReactNode
  className?: string
}

const Section: React.FC<Section> = ({ style, children, className = "" }) => (
  <section style={style} className={`${sectionStyles.section} ${className}`}>
    <div className={`${sectionStyles.description}`}>
      {children}
    </div>
  </section>
)

export default Section
