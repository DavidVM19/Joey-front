import { Link } from "react-router-dom";
import ImgHome from "../../assets/presentation-accueil.jpg";
import Mobile from "../../assets/appli-mobile.png";
import Riz from "../../assets/riz.jpg";
import Marché from "../../assets/marché1.jpg";
import Femme from "../../assets/femme-cagette.jpg";
import Extra from "../../assets/extra.png";
import Child from "../../assets/child.png";
import Baby from "../../assets/baby.png";
import Family from "../../assets/family.png";
import ShopCards from "../shop_cards/ShopCards";
import ReviewsCards from "./reviews/ReviewsCards";

const Home = () => {
  const productCard = {
    product_id: 1,
    product_img: "../src/assets/appli-mobile.png",
    alt_img: "alt",
    product: "Produit",
    price: 10,
    marque: "marque",
  };

  const reviews = {
    review_text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas minima laborum facere provident, veritatis, ipsam ab sit",
    rating: 5,
  };

  return (
    <div className="home">
      <div className="home__img">
        <img src={ImgHome} alt="home_img" />
      </div>
      <div className="home__title">
        <h1>Comment ça marche ?</h1>
      </div>
      <div className="home__presentation">
        <div className="home__presentation__first">
          <div className="home__presentation__first__img-zoom">
            <img src={Mobile} alt="mobile" />
          </div>
          <h2>1</h2>
          <div className="home__presentation__first__text">
            <h3>Choisissez les caractéristiques de votre formule</h3>
          </div>
        </div>
        <div className="home__presentation__second">
          <div className="home__presentation__second__text">
            <h3>Sélectionnez des recettes de saison pour toute la famille</h3>
          </div>
          <h2>2</h2>
          <div className="home__presentation__second__img-zoom">
            <img src={Riz} alt="riz" />
          </div>
        </div>
        <div className="home__presentation__third">
          <div className="home__presentation__third__img-zoom">
            <img src={Marché} alt="marché" />
          </div>
          <h2>3</h2>
          <div className="home__presentation__third__text">
            <h3>On prépare votre panier avec les ingrédients</h3>
          </div>
        </div>
        <div className="home__presentation__fourth">
          <div className="home__presentation__fourth__text">
            <h3>On vous livre à la maison ou au boulot !</h3>
          </div>
          <h2>4</h2>
          <div className="home__presentation__fourth__img-zoom">
            <img src={Femme} alt="femme" />
          </div>
        </div>
      </div>
      <div className="home__cardstitle">
        <h1>
          Des recettes adaptées selon l'arrivage des produits et l'âge de vos
          enfants
        </h1>
      </div>
      <div className="home__cards">
        <div className="home__cards__first">
          <img src={Extra} />
        </div>
        <div className="home__cards__second">
          <img src={Child} />
        </div>
        <div className="home__cards__third">
          <img src={Baby} />
        </div>
        <div className="home__cards__fourth">
          <img src={Family} />
        </div>
      </div>
      <div className="home__shoptitle">
        <h1>La boutique des Joey's</h1>
      </div>
      <div className="home__shop">
        <div className="home__shop__firstproduct">
          <ShopCards
            product_id={productCard.product_id}
            product_img={productCard.product_img}
            alt_img={productCard.alt_img}
            product={productCard.product}
            price={productCard.price}
            marque={productCard.marque}
          />
        </div>
        <div className="home__shop__secondproduct">
          <ShopCards
            product_id={productCard.product_id}
            product_img={productCard.product_img}
            alt_img={productCard.alt_img}
            product={productCard.product}
            price={productCard.price}
            marque={productCard.marque}
          />
        </div>
        <div className="home__shop__thirdproduct">
          <ShopCards
            product_id={productCard.product_id}
            product_img={productCard.product_img}
            alt_img={productCard.alt_img}
            product={productCard.product}
            price={productCard.price}
            marque={productCard.marque}
          />
        </div>
        <div className="home__shop__fourthproduct">
          <ShopCards
            product_id={productCard.product_id}
            product_img={productCard.product_img}
            alt_img={productCard.alt_img}
            product={productCard.product}
            price={productCard.price}
            marque={productCard.marque}
          />
        </div>
        <div className="home__shop__fifthproduct">
          <ShopCards
            product_id={productCard.product_id}
            product_img={productCard.product_img}
            alt_img={productCard.alt_img}
            product={productCard.product}
            price={productCard.price}
            marque={productCard.marque}
          />
        </div>
      </div>
      <div className="home__shop__link">
        <Link to="/shop" id="link">
          Voir plus d'articles
        </Link>
      </div>
      <div className="home__reviewstitle">
        <h1>Les avis</h1>
      </div>
      <div className="home__reviews">
        <div className="home__reviews__first">
          <ReviewsCards
            review_text={reviews.review_text}
            rating={reviews.rating}
          />
        </div>
        <div className="home__reviews__second">
          <ReviewsCards
            review_text={reviews.review_text}
            rating={reviews.rating}
          />
        </div>
        <div className="home__reviews__third">
          <ReviewsCards
            review_text={reviews.review_text}
            rating={reviews.rating}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
