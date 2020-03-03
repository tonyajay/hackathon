import React from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
// import { UserContext } from "../context/user";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart } = React.useContext(CartContext);
  const { user } = React.useContext(UserContext);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className="cart-items section">
      <h2>your cart</h2>
      {cart.map(item => {
        return <CartItem key={item.id} {...item} />;
      })}
      <button className="btn btn-primary btn-block" onClick={clearCart}>
        clear cart
      </button>
      ;
      {user.token ? (
        <Link to="/review" className="btn btn-primary btn-block">
          review
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary btn-block">
          login
        </Link>
      )}
    </section>
  );
}
