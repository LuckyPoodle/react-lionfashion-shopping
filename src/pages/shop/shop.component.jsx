import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';



import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/fire.util';
import { updateCollections } from '../../redux/shop/shop.actions';


const CollectionsOverviewWithSpinner =WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);


class ShopPage extends React.Component{

    state={
        loading:true
    };

    unsubscribeFromSnapshot=null;
    //snapshot is gg to be the snapshot representation of our array

    componentDidMount(){

        const {updateCollections}=this.props;
        const collectionRef=firestore.collection('collections');
        collectionRef.get().then(snapshot=>{
            console.log("on Snapshot")
            const collectionsMap=convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
            console.log("SHOP COMPONENT DID MOUNT");
            console.log(collectionsMap);
            this.setState({loading:false})
        })
    }



    render(){
        const {match}=this.props;
        const {loading}=this.state;

        console.log("shop component this.props");
        console.log(this.props)

         //shop page is nested in a route in app.js
    //in Route to COllECTIONPAGE, the path params name u use categoryId, so when accessing it u refer to it in mapstatetoprops of collection component
    return(
    
    
<div className='shop-page'>
    
    <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />  
    <Route path={`${match.path}/:categoryId`} 
    render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props} />} />
    
</div>)}


}


const mapDispatchToProps=dispatch=>({
    updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);