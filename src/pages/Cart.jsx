import CartItem from "../components/CartItem";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
  <div className="cart-content">
    {cart.map((item, index) => (
      <CartItem
        key={index}
        item={item}
        index={index}
        removeFromCart={removeFromCart}
      />
    ))}

    <p>Total: ${total.toFixed(2)}</p>
    <button className="checkout-button">
      Checkout
    </button>
  </div>
)}
  <Link to="/" className="continue-button">
    Home
  </Link>
    </section>
    
  );
}

export default Cart;