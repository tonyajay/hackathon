import React from "react";
import { CartContext } from "../../context/cart";
import { Checkbox } from "@material-ui/core";

export default function CartItem({ id, image, fee, name }) {
  const { removeItem } = React.useContext(CartContext);

  function compareCollege() {}

  return (
    <article className="cart-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5>{fee}</h5>
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
        <Checkbox onChange={e => compareCollege(e)} />
      </div>
    </article>
  );
}
