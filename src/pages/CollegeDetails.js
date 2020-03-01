import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { CollegeContext } from "../context/colleges";
import Loading from "../components/Loading";
import { CartContext } from "../context/cart";

export default function CollegeDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { colleges } = React.useContext(CollegeContext);
  const { addToCart } = React.useContext(CartContext);
  const college = colleges.find(item => item.id === parseInt(id));
  if (colleges.length === 0) {
    return <Loading />;
  } else {
    const { image, title, price, description } = college;
    return (
      <section className="single-product">
        <img src={image} alt={title} className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>{price}</h2>
          <p>{description}</p>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              addToCart(college);
              history.push("/cart");
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    );
  }
}
