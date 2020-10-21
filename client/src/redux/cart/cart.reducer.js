import CartActionTypes from './cart.types';
import { addItemToCard, removeItemFromCart} from './cart.utils';

const INITIAL_STATE={
    hidden:true,
    cartItems:[],
    accumulatedCartQty:0
};

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCard(state.cartItems,action.payload),
                accumulatedCartQty:state.accumulatedCartQty+1
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id),
                accumulatedCartQty:state.accumulatedCartQty-1
            }

        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload),
                accumulatedCartQty:state.accumulatedCartQty-1
            }

        default:
            return state;
    }
}

export default cartReducer;