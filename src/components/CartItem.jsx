import "./CartItem.css";


function CartItem({ item, removeFromCart, index }) {
    return (
        <li className="cart-item">
            <img src={item.image} alt={item.name} className="item-image"/>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
        </li>
        
    );

}

export default CartItem;