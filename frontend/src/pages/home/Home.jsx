import banniere from "../../assets/Image source 1.png"
import Card from "../../components/card/Card"
import useLogements from "../../hooks/useLogements"
import "./home.css"

export default function Home() {
  const { logements, loading } = useLogements()

  if (loading) return <p>Chargement en cours...</p>

  return (
    <div className="home">
      <div className="home-banner">
        <img src={banniere} alt="bannière accueil" className="banner-img" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <div className="cards-container">
        {logements.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} id={item.id} />
        ))}
      </div>
    </div>
  )
}
