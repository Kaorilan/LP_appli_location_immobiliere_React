import { Link } from "react-router-dom"
import logo from "../../assets/LOGO_Kasa.png"
import logoFooter from "../../assets/Footer_Desktop.png"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div id="layout">
      <header>
        <img src={logo} alt="Logo Kasa"/>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
        </nav>
      </header>

      <main>
        {children} {/* ici s’affiche le contenu variable */}
      </main>

      <footer>
        <img src={logoFooter} alt="Logo Kasa"/>
      </footer>
    </div>
  )
}
