import { Link } from "react-router-dom"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
        </nav>
      </header>

      <main>
        {children} {/* ici s’affiche le contenu variable */}
      </main>

      <footer>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  )
}
