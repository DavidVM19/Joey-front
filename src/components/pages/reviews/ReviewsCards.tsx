import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const ReviewsCards = (props: { review_text: string; rating: number }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="review">
      <p className="review__text">{props.review_text}</p>
      <div className="review__rating">
        <Rating onClick={handleRating} />
      </div>
    </div>
  );
};

export default ReviewsCards;
