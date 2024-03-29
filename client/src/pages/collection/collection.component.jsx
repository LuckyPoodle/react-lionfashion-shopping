import React from 'react';


import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';
import NotFound from '../../components/404/notfound.component';

import './collection.styles.scss';

const CollectionPage = ({ collection}) => {

  if (!collection){

    return ( <NotFound msg='Sorry the dog ate the collection you are looking for'/> 
    );
   
  }



  console.log("IN COLLECTION");
  console.log(collection);
    const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };


//state is overall reducer state from the top, ownProps is props of component we r wrapping in connect
const mapStateToProps = (state, ownProps) => ({

        collection: selectCollection(ownProps.match.params.categoryId)(state)
    

})
    
    

export default connect(mapStateToProps)(CollectionPage);