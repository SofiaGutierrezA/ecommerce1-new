import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail({ addToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [id]);

    if(!product) {
        return <p>Loading...</p>;
    }

    console.log(product);
    return (
       <div className="product-detail">

        <img src={product.image} alt={product.name} className="product-image-a" />
        <div>
        <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">{product.price}€</p>
        
           <h3>Sizes: </h3>
           <div className="size-buttons">
            {product.sizes.map((item) => (
            <button key={item.size} 
            onClick={() => setSelectedSize(item.size)}
            >
            {item.size}
            </button>
            
        ))} 
        </div>
        {selectedSize && <p>Selected size: {selectedSize}</p>}
        
        <button onClick={() => addToCart(product, selectedSize)}
            disabled={!selectedSize}
            className="add-to-cart-button">
            Add to Cart</button>
            </div>
        </div>
       </div> 
    )

}

export default ProductDetail;