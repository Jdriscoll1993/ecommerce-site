import { Fragment, useContext } from 'react';
import { React, Outlet, Link } from 'react-router-dom';
import { ReactComponent as NavLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import '../navigation/navigation.styles.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext); //rerenders component when the value of UserContext is updated

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

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
                        <Link to='/'>CONTACT</Link>
                    </div>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>)
                            : (<Link to='/auth'>SIGN IN</Link>)
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;  