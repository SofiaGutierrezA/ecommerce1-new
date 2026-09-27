import "./Women.css";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Women({ addToCart }) {
    const [products, setProducts] = useState([]);
    
        useEffect(() => {
            fetch("http://localhost:3000/api/products")
                .then((response) => response.json())
                .then((data) => setProducts(data));
        }, []);
    
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