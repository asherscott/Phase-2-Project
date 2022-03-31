import "./StarRating.css";

function StarRating({ rating }) {
  return <span className="rating">★★☆☆☆{rating}</span>;
}

export default StarRating;
