import { useParams, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Collapse from "../../components/collapse/Collapse"
import Gallery from "../../components/gallery/Gallery"
import "./logement.css"

export default function Logement() {
  const { id } = useParams()
  const [logement, setLogement] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLogement(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <p>Chargement...</p>
  if (!logement || !logement.id) return <Navigate to="/notfound" replace />

  return (
    <div className="logement">
      {/* Galerie d’images */}
      <Gallery pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="logement-tags">
            {logement.tags?.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement-host">
          <div className="host-info">
            <p>{logement.host?.name}</p>
            <img src={logement.host?.picture} alt={logement.host?.name} />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < logement.rating ? "star filled" : "star"}>★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description"> {logement.description} </Collapse>
        <Collapse title="Équipements"> {logement.equipments?.join(", ")} </Collapse>
      </div>
    </div>
  )
}
