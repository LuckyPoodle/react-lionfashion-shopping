import React from 'react';
import {Route,Switch} from 'react-router-dom';

import {connect} from 'react-redux';



import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import { fetchCollectionsStartAync } from '../../redux/shop/shop.actions';
import NotFound from '../../components/404/notfound.component';


const CollectionsOverviewWithSpinner =WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);


class ShopPage extends React.Component{

    componentDidMount(){
        //mounts after the initial render call, when first render is called, 
        //isCollectionFetching is using default value of FALSE, passing FALSE into isLoading wil cause WrappedComponent to be loaded instead of spinner,
        //but Collection component expects collection to render

        console.log("*****SHOP COMPONENT DID MOUNT***** ")

        const{fetchCollectionsStartAync}=this.props;
        fetchCollectionsStartAync();
      
    }

    render(){
  
        const {match,isCollectionFetching}=this.props;

         //shop page is nested in a route in app.js
    //in Route to COllECTIONPAGE, the path params name u use categoryId, so when accessing it u refer to it in mapstatetoprops of collection component
    return(
    
    
<div className='shop-page'>
    <Switch>


    <Route exact path={`${match.path}`} 
    
    //render={(props)=><CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} 
    component={CollectionsOverviewContainer}
    />  
    
    
    <Route path={`${match.path}/:categoryId`} render={(props)=><CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
  
    </Switch>
  
    
</div>)}


}

const mapStateToProps=createStructuredSelector({
    isCollectionFetching:selectIsCollectionFetching
})

const mapDispatchToProps=dispatch=>({
    fetchCollectionsStartAync:()=>dispatch(fetchCollectionsStartAync())
    
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);