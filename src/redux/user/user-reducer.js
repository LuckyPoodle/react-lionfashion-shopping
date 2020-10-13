import {userActionTypes} from './users.types';

const INITIAL_STATE={
    currentUser:null
}

const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            console.log("ACTION PAYLOAD");
            console.log(action.payload);

            return{
                ...state,
                currentUser:action.payload
            }
            


        default:
            return state;
    }
}

export default userReducer;