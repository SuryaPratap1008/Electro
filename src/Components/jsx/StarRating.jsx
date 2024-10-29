import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "../css/starRating.css";
export default function StarRating(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  useEffect(() => {
    if (props.avgRating) {
      setRating(props.avgRating);
    }
  });

  function rate(event) {
    if (!props.avgRating) {
      setRating(event.target.value);
      // console.log(rating)
    }
  }

  return (
    <div id="rating-cont">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <FaStar
              size={20}
              color={(hover || rating) >= ratingValue ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => {
                if (props.hover != "off") {
                  setHover(ratingValue);
                  console.log(hover);
                }
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
            ></FaStar>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={rate}
            />
          </label>
        );
      })}
    </div>
  );
}
