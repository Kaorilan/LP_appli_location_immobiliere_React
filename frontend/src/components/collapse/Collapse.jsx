import { useState } from "react"
import "./collapse.css"

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span className={`collapse-arrow ${isOpen ? "open" : ""}`}>⌃</span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          <p>{children}</p>
        </div>
      )}
    </div>
  )
}
