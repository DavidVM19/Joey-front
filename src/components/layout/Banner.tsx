import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <Link to="/findAdress">
        <h1 className="banner__title">
          Livraison Montpellier intramuros offerte en 48h - Testez votre adresse
        </h1>
      </Link>
    </div>
  );
};

export default Banner;
