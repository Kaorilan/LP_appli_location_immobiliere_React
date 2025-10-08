import { useState } from "react"
import "./gallery.css"

export default function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Aller à la photo précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  // Aller à la photo suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="gallery">
      {pictures.length > 0 && (
        <img
          src={pictures[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="gallery-image"
        />
      )}

      {pictures.length > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>
            ❮
          </button>
          <button className="arrow right" onClick={nextSlide}>
            ❯
          </button>
          <p className="counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  )
}
