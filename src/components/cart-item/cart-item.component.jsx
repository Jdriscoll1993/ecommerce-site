
import './cart-item.styles.scss';
const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <h2>{name}</h2>
            <h4>{quantity}</h4>
        </div>
    )
}
export default CartItem;