import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    
  );
}

export default ProductCard;