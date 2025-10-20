
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "./collapse.css"

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <FontAwesomeIcon
          data-testid="collapse-icon"
          icon={faChevronUp}
          className={`collapse-icon ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  )
}

export default Collapse
