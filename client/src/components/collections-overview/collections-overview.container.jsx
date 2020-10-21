import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {selectIsCollectionFetching}from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collections-overview.component';

const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionFetching
})

//const CollectionOverviewContainer=connect(mapStateToProps)(WithSpinner(CollectionOverview))
//HARD TO READ ABOVE, so use compose

const CollectionsOverviewContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;