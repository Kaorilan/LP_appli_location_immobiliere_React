import { Link } from "react-router-dom"
import logo from "../../assets/LOGO_Kasa.png"
import footerDesktop from "../../assets/Footer_Desktop.png"
import footerMobile from "../../assets/footer_Mobile.png"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div id="layout">
      <header>
        <img src={logo} className="logo" alt="Logo Kasa"/>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
        </nav>
      </header>

      <main>
        {children} {/* ici s’affiche le contenu variable */}
      </main>

      <footer>
        <img src={footerDesktop} alt="Logo Kasa footer desktop" className="footer_img_desktop"/>
        <img src={footerMobile} alt="Logo kasa footer mobile" className="footer_img_mobile"/>
      </footer>
    </div>
  )
}
