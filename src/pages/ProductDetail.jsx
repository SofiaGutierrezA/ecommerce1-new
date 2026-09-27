import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ addToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [id]);

    if(!product) {
        return <p>Cargando...</p>;
    }

    return (
       <div>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.price}€</p>
        <button onClick={() => addToCart(product)}>Añadir al carrito</button>
       </div> 
    )

}

export default ProductDetail;