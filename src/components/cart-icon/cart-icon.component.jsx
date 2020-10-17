import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon =({toggleCartHidden,accumulatedCartQty})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{accumulatedCartQty}</span>
    </div>
);


const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

const mapStateToProps=({cart:{accumulatedCartQty}})=>({
    accumulatedCartQty:accumulatedCartQty
    
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);