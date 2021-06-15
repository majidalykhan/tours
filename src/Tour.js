import React, { useState, useEffect } from "react";

const Tour = ({ id, image, info, name, price }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore
            ? info //if readMore = true then show info, else
            : `${info.substring(0, 250)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "Show more"}
          </button>
        </p>

        <button className="delete-btn">Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
