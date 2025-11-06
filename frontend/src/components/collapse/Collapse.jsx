import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./collapse.css";

function Collapse({ title = "", children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // référence au contenu

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // ajuste dynamiquement la hauteur du contenu
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

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

      <div
        id="collapse-content"
        ref={contentRef}
        className={`collapse-content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {children || "Aucun contenu"}
      </div>
    </div>
  );
}

export default Collapse;
