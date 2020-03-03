import React from "react";

function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getCartFromLocalStorage());
  const [cartItems, setCartItems] = React.useState(0);
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
  }, [cart]);
  const removeItem = id => {
    setCart([...cart].filter(item => item.id !== id));
  };
  const addToCart = product => {
    const { id, image, title, fee } = product;
    const item = [...cart].find(item => item.id === id);
    if (item) {
      alert("This college is already in the cart");
    } else {
      const newItem = { id, image, title, fee, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartItems, removeItem, clearCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { CartContext, CartProvider };
