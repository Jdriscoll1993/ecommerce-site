
import './cart-item.styles.scss';
const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'></div>
            <span>{name}</span>
            <span>{quantity}</span>
        </div>
    )
}
export default CartItem;