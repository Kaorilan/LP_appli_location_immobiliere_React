import banniere from "../../assets/Image source 1.png"
import Card from "../../components/card/Card"
import useLogements from "../../hooks/useLogements"
import "./home.css"

export default function Home() {
  const { logements, loading, error } = useLogements()

  if (loading) return <p className="loading">Chargement en cours...</p>
  if (error) return <p className="error">Erreur : {error}</p>

  return (
    <div className="home">
      <div className="home-banner">
        <img src={banniere} alt="Bannière d'accueil Kasa" className="banner-img" />
        <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
      </div>

      <div className="cards-container">
        {logements.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    </div>
  )
}
