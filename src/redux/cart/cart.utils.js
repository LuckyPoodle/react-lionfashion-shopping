export const addItemToCard=(cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);
    console.log("existingCartitem ");
    console.log(existingCartItem);
    if(existingCartItem){
        return cartItems.map(
            cartItem=>
            cartItem.id===cartItemToAdd.id?
                        {...cartItem,quantity:cartItem.quantity+1}
                        :cartItem
            
            );
    }
    console.log("not existing");

    return [...cartItems,{...cartItemToAdd,quantity:1}] //for non-existing cart item
}

export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===cartItemToRemove.id
    )

    if (existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem=>
            cartItem.id===cartItemToRemove.id?
            {...cartItem,quantity:cartItem.quantity-1}
            :
            cartItem
    )

}