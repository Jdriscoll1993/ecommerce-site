import { Fragment } from 'react';
import { React, Outlet, Link } from 'react-router-dom';
import { ReactComponent as NavLogo } from '../../assets/crown.svg';

import '../navigation/navigation.styles.scss';

const Navigation = () => {
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
                        <Link to='/shop'>shop</Link>
                    </div>

                    <div className='nav-link'>
                        <Link to='/'>contact</Link>
                    </div>

                    <div className='nav-link'>
                        <Link to='/auth'>sign in</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;  