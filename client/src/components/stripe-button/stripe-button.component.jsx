import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const stripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HcYnSCzQqyN0N2r04TJVJCfdYRSYiK43EMVQQeqQFRBIk6zcOYYxWEZiKjzOJKCEjSdPCPNVdMBrKjuieAQ3vdt00AQuJjQfH';
    
    //make request to payment route
    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };
    
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