import ShopActionTypes from './shop.types';
import { firestore,convertCollectionsSnapshotToMap} from '../../firebase/fire.util';



/* export const updateCollections=(collectionMap)=>({
    type:ShopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionMap
})
 */

export const fetchCollectionsStart=()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess=(collectionMap)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionMap
});

export const fetchCollectionsFailure=(error)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:error
});




export const fetchCollectionsStartAync = ()=>{
    //returning a function so REDUX THUNK will give this dispatch to this function, so in this function we can receive the dispatch
    //and dispatch to reducers the normal objects
    return dispatch=>{
        const collectionRef=firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        //isFetching now True
        collectionRef.get().then(snapshot=>{
            console.log("on Snapshot")
            const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
           
            dispatch(fetchCollectionsSuccess(collectionsMap));
           
        }).catch(err=>dispatch(fetchCollectionsFailure(err.message)))
    }
}