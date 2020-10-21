import {createSelector} from 'reselect';

const selectCart=state=>state.cart;

export const selectCartItems=createSelector(
    [selectCart],
    cart=>cart.cartItems


);

export const selectCartTotal=createSelector(
    [selectCartItems],
    cartItems=>
    cartItems.reduce(
        (accumulatedCartQty,cartItem)=>
            accumulatedCartQty+cartItem.quantity*cartItem.price,0

        

    )
)


export const selectCartItemsCount=createSelector(
    [selectCartItems],
    cartItems=>
        cartItems.reduce(
            (accumulatedCartQty,cartItem)=>
            accumulatedCartQty+cartItem.quantity,0
        )
)