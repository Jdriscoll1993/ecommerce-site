import { Fragment, useContext } from 'react';
import { React, Outlet, Link } from 'react-router-dom';
import { ReactComponent as NavLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component'
import '../navigation/navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext); //rerenders component when the value of UserContext is updated

    //Don't need a sign out handler bc auth state change listener will catch whenever a user signs out
    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);
    // }

    return (
        <Fragment>
            <div className='navigation'>
                <div className='logo-container'>
                    <Link to='/'>
                        <NavLogo className='logo' />
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <div className='nav-link'>
                        <Link to='/shop'>SHOP</Link>
                    </div>

                    <div className='nav-link'>
                        <Link to='/contact'>CONTACT</Link>
                    </div>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                            : (<Link to='/auth'>SIGN IN</Link>)
                    }
                    <CartIcon />
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;  