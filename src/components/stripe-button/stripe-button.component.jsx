import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HcYnSCzQqyN0N2r04TJVJCfdYRSYiK43EMVQQeqQFRBIk6zcOYYxWEZiKjzOJKCEjSdPCPNVdMBrKjuieAQ3vdt00AQuJjQfH';
    
    const onToken=token=>{

        alert("payment made")

    }
    
    return (
        <StripeCheckout 
        label='Make Payment'
        name='LionFashion'
        billingAddress
        shippingAddress
        description={`Total Payment $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}


        />
    )
}

export default stripeCheckoutButton;