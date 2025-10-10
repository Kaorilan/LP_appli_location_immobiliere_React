import "./banner.css"

export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière" className="banner-img" />
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  )
}
