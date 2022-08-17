import Button from '../button/button.componenet';
import ShoppingIcon from '../cart-icon/cart-icon.component';
import './cart-dropdown.styles.scss';
const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>

            <div className='cart-items' />
            <Button type='button' buttonType='inverted'>Checkout</Button>
        </div>
    )
}

export default CartDropdown;