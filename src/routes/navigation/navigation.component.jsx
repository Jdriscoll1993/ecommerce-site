import { Fragment, useContext } from 'react';
import { React, Outlet, Link } from 'react-router-dom';
import { ReactComponent as NavLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext } from '../../contexts/cart.context';
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';
const Navigation = () => {
    
    //rerenders component when the value of context is updated
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <NavLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                            : (<NavLink to='/auth'>SIGN IN</NavLink>)
                    }
                    <CartIcon onClick={'TOGGLE CART DROP DOWN HERE'} />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;  