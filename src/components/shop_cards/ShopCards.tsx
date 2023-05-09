const ShopCards = (props: {
  product_id: number;
  product_img: string;
  alt_img: string;
  product: string;
  price: number;
  marque: string;
}) => {
  return (
    <div className="shop__cards" key={props.product_id}>
      <div className="shop__cards__img">
        <img src={props.product_img} alt={props.alt_img} />
      </div>
      <div className="shop__cards__product">
        <h2>{props.product}</h2>
      </div>
      <div className="shop__cards__price">
        <h2>{props.price}€</h2>
      </div>
      <div className="shop__cards__marque">
        <h3>{props.marque}</h3>
      </div>
    </div>
  );
};

export default ShopCards;
