import React from 'react';
import {connect} from 'react-redux'

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item.component/cart-item.component';
import {withRouter} from 'react-router-dom';

import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropDown=({cartItems,history,dispatch,accumulatedCartQty})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
           accumulatedCartQty===0?
           <span className='empty'>Your cart is empty! Add to cart now! </span>:
           cartItems.map(cartItem=>(
            <CartItem key={cartItem.id} item={cartItem} />
        ))
        }
        </div>
        <CustomButton
         onClick={()=>{
             history.push('/checkout');
             dispatch(toggleCartHidden());
         }}>Check Out</CustomButton>
    </div>
);

const mapStateToProps=({cart:{cartItems,accumulatedCartQty}})=>({
    cartItems,
    accumulatedCartQty

})

export default withRouter(connect(mapStateToProps)(CartDropDown));