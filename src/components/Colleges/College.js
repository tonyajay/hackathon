import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import img from "../../assets/mainBcg.jpeg";

export default function College({ id, name, location, rank, fee, image }) {
  return (
    <article className="product">
      <div className="img-container">
        <img src={image || img} alt={name || "default title"} />
        <Link to={`colleges/${id}`} className="btn btn-primary product-link">
          details
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{name || "default title"}</p>
        <p className="product-price">{`$${fee}` || 0}</p>
      </div>
    </article>
  );
}
College.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
