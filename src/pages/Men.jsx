import "./Men.css";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Men({ addToCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

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