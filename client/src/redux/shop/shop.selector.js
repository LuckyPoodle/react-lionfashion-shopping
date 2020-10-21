import {createSelector} from 'reselect';


//get the WHOLE reducer state, and get a piece of it (shop)
const selectShop=(state)=>state.shop;

export const selectCollections=createSelector(

 
       [selectShop],
        (shop)=>shop.collections

);


export const selectCollectionsForPreview=createSelector(
    [selectCollections],
    (collections)=>collections?Object.keys(collections).map((key)=>collections[key]):[]
    //give us array of items we want
)
export const selectCollection=collectionUrlParam=>{

    
    return   createSelector([selectCollections],
        collections=>{
            console.log(collections)
            return((collections?collections[collectionUrlParam]:null))
        }
)
}

export const selectIsCollectionFetching = createSelector(
    //we pass in selectShop as we want the shop object, then return shop.isFetching
    [selectShop],
    shop=>shop.isFetching
)
   
   
      
    

 

//     CollectionUrlParam is a dynamic argument meaning it can change, so to memoize selectCollection we actually have to memoize the whole function using a memoize helper function.
// By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.