import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__first">
        <Link to="/shop" id="link">
          la boutique
        </Link>
        <Link to="/subscriptions" id="link">
          les formules
        </Link>
        <Link to="/blog" id="link">
          le blog
        </Link>
      </div>
      <div className="header__second">
        <Link to="/" id="link">
          <img id="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header__third">
        <div>{""}</div>
        <Link to="/myaccount/:user" id="link">
          mon compte
        </Link>
        <Link to="/basket" id="link">
          mon panier
        </Link>
      </div>
    </div>
  );
};

export default Header;
