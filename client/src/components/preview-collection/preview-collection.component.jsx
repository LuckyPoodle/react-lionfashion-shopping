import React from 'react';
import './preview-collection.styles.scss';
import {withRouter} from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

class PreviewCollection extends React.Component{



  render(){
    const { title, items, history, match, routeName }=this.props;

    return (
      (
        <div className='collection-preview'>
          <h1 className='title' onClick={() => {
     
  
            return (
              history.push(`${match.path}/${routeName}`)
            )
          }}>{title.toUpperCase()}</h1>
          <div className='preview'>
            {items
              .filter((item, idx) => idx < 4)
              .map(item => (
                <CollectionItem key={item.id} item={item} />
              ))}
          </div>
        </div>
      )
  
    )

  }



}



export default withRouter(PreviewCollection);
