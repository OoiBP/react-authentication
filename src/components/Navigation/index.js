import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
)

const NavigationAuth = () => (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div>
                <Link className='navbar-brand' to={ROUTES.LANDING}>Navbar</Link>
            </div>

            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to={ROUTES.HOME}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to={ROUTES.ACCOUNT}>Account</Link>
                </li>
                <li className='nav-item'>
                    <SignOutButton />
                </li>
            </ul>
        </nav>
    </div>
)

const NavigationNonAuth = () => (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div>
                <Link className='navbar-brand' to={ROUTES.LANDING}>Navbar</Link>
            </div>

            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default Navigation;