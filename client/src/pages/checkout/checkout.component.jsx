import React from 'react';

import './checkout.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item.component/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const Checkout=({cartItems,total})=>{

    return(
        <div  className='checkout-page'>

            <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>

             <div className='header-block'>
                <span>Price</span>
            </div>

            <div className='header-block'>
                <span>Remove</span>
            </div>

            </div>

            {
                cartItems.map(cartItem=>
                    <CheckoutItem key={cartItem.id}cartItem={cartItem} />
                )
            }

            <div className='total'>
                <span>TOTAL : ${total}</span>
            </div>
            <div className='test-warning'>
                * test credit card only *
                <br />
                4242 4242 4242 4242 - expiry date 12/20 - cvv 123 
            </div>

            <StripeCheckoutButton price={total} />

        </div>
    )
}



const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(Checkout);