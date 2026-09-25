import "./Women.css";
import { Link } from "react-router-dom";
import products from "../data/Products.js";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";


function Women({ addToCart }) {
    const womenProducts = products.filter((product) => product.category === "women");

    return (
    <div>
    <h1>Women</h1>
     <ProductSection
        products={womenProducts}
        addToCart={addToCart}
      />
        <Footer />
    </div>
    );
}

export default Women;