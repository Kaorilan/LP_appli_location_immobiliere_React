
import { Link } from "react-router-dom";
import "./Card.css";
import logo from "../../assets/LOGO_Kasa.png"; 

function Card({ id, title, cover }) {
  const imageSrc = cover || logo; 
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={imageSrc} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}

export default Card;
