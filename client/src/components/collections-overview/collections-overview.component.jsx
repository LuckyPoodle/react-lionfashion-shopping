import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import PreviewCollection from '../preview-collection/preview-collection.component';

import './collections-overview.styles.scss';

const CollectionsOverview=({collections})=>{
    console.log(collections)

    if (collections.length==0){
        return (
            <h1 style={{textAlign:'center'}}>Firebase down :(</h1>
        )
    }
    return(
        <div className='collections-overview'>
             {
                    collections.map(({id,...otherCollectionProps})=>(
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    ))
                   
                }

        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);