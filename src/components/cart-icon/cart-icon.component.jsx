import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as CartSvg } from '../../assets/shopping-bag.svg';
import '../cart-icon/cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

    const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown} >
            <CartSvg className='shopping-icon' />
            <span className='item-count'>{cartItemCount}</span>
        </div>
    )
}
export default CartIcon;