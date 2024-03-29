import React from 'react';

import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/fire.util';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from '../../assets/yellowlion.svg';
const Header=({currentUser,hidden})=>{

 

    
    return(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>     
            
            </Link>

            {currentUser?<span className='greetingheader'> Hi {currentUser.displayName}</span>:null}
           


            <div className='options'>
          
            <Link className='option' to='/shop'>SHOP</Link>
                

                {currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>: <Link className='option' to='/signin'>Sign In</Link>}
                    <CartIcon />
               
            </div>
            
            {
                hidden?null:<CartDropDown />
            }
        
        </div>
)};



const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden}
);


export default connect(mapStateToProps)(Header);