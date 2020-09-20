import React from 'react';

import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/fire.util';

import {ReactComponent as Logo} from '../../assets/yellowlion.svg';
const Header=({currentUser})=>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>     
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
          
            </div>

            <div className='options'>
                <Link className='option' to='/shop'>CONTACT</Link>

                {currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>: <Link className='option' to='/signin'>Sign In</Link>}
               
            </div>

        </div>
)

export default Header;