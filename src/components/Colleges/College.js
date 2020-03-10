import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function College({
  id,
  name,
  location,
  image,
  index,
  featured,
  totalavg
}) {
  return (
    <article className="product">
      <br />
      {featured ? (
        <p className="product-footer product-title">
          Current Rank :{index + 1}
        </p>
      ) : (
        <p className="product-footer product-title">Score :{totalavg}/500</p>
      )}
      <div className="img-container">
        <img src={image} alt={name} />
        <Link to={`colleges/${id}`} className="btn btn-primary product-link">
          details
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{name || "default title"}</p>
        <p className="product-price">{`${location}`}</p>
      </div>
    </article>
  );
}
College.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
