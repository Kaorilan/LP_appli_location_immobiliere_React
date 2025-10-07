import { Link } from "react-router-dom"

import "./notfound.css"

export default function NotFound() {
  return (
  <div className="mainNotfound">
    <p className="notfound">404</p>
    <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/">Retourner à la page d'accueil</Link>
    
  </div>
  )
}
