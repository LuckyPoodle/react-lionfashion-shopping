
import ShopActionTypes from './shop.types';

const INITIAL_STATE={
    collections:null,
    isFetching:false,
    errorMsg:undefined
}


const shopReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching:true
            }

        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMsg:action.payload

            }

        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload
            }
        /* case ShopActionTypes.UPDATE_COLLECTIONS:
            console.log("shopReducer_______");
            console.log(action.payload);
            return {
                ...state,
                collections:action.payload
            } */
        default:
            return state;
    }
}

export default shopReducer;