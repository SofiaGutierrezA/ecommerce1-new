import "./Men.css";
import { Link } from "react-router-dom";
import products from "../data/Products.js";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

function Men({ addToCart }) {
    const menProducts = products.filter((product) => product.category === "men");

    return (
    <div>
    <h1>Men</h1>
     <ProductSection
        products={menProducts}
        addToCart={addToCart}
      />
      <Footer />
    </div>
    );
}

export default Men;