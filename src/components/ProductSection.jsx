import "./ProductSection.css";
import ProductCard from "./ProductCard";
import { useState } from "react";

function ProductSection({ products, addToCart }) {
  const [search, setSearch] = useState("");

  return (
    <section>

      <input
        className="search-input"
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-section">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
      </div>
    </section>
  );
}

export default ProductSection;