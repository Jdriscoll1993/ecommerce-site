import '../cart-icon/cart-icon.styles.scss';
import { ReactComponent as CartSvg } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            <CartSvg className='shopping-icon' />
            <span className='item-count'>0</span>

        </div>
    )
}
export default CartIcon;