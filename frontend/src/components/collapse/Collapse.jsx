import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./collapse.css";

function Collapse({ title = "", children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleToggle(e);
          }
        }}
        aria-expanded={isOpen}
        aria-controls="collapse-content"
        role="button"
      >
        {title || "Sans titre"}
        <FontAwesomeIcon
          data-testid="collapse-icon"
          icon={faChevronUp}
          className={`collapse-icon ${isOpen ? "open" : ""}`}
        />
      </button>
      {isOpen && (<div id="collapse-content" className="collapse-content">{children || "Aucun contenu"}</div>
      )}
    </div>
  );
}

export default Collapse;