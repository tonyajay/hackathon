import React from "react";
import { CartContext } from "../../context/cart";
import { Checkbox } from "@material-ui/core";

export default function CartItem({ id, image, price, title }) {
  const { removeItem } = React.useContext(CartContext);
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => {
            removeItem(id);
          }}
        >
          remove
        </button>
      </div>
      <div>
        <Checkbox />
      </div>
    </article>
  );
}
