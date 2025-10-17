import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, title, cover }) {
  const imageSrc = cover || "/images/fallback.jpg";

  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={imageSrc} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}

export default Card;
