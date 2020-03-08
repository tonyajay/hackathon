import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function College({ id, name, location, rank, fee, image }) {
  return (
    <article className="product">
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
