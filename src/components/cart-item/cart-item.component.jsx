
const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl } = cartItem;
    return (
        <div>
            <img src={imageUrl} alt={`${name}`} />
            <h2>{name}</h2>
            <h4>{quantity}</h4>
        </div>
    )
}
export default CartItem;