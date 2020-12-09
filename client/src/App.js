import React, { lazy, Suspense } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

import { GlobalStyle } from './globalstyle/global.styles';

import NotFound from './components/404/notfound.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Annoucement from 'react-announcement';
import trustyproducer from"./assets/trustyproducer.png";

import { addCollectionAndItems, auth, createUserProfileDocument } from './firebase/fire.util';

import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import Spinner from './components/spinner/spinner.component';
//dynamic loading
//only when homepage need to be rendered, then the homepage be pulled from backend and loaded to the route
const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-out/sign-in-and-sign-out.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'))



class App extends React.Component {


  /*this is a method that go into the prototype Object (outside constructor) ES6 dunnid declare with var/const/let*/
  unsubscribeFromAuth = null;



  componentDidMount() {

    const { setCurrentUser } = this.props;



    /*unsubscribeFromAuth is reassigned to the return value of auth.onAuthStateChanged() which is firebase.unsubscribe()*/
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      if (user) {

        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {  /*what we got back is a snapshot object */
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }

          )



          //*****ONE OFF to add all SHOP DATA to firebase automatically to save manual entry time!!! */
          /*  let shopArray=Object.keys(this.props.collections).map((key)=>this.props.collections[key]);
           addCollectionAndItems('collections',shopArray.map(({title,items})=>({title,items}))) */



        });


      } else {
        setCurrentUser(user);

      }



    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); /* this is calling the returned firebase.Unsubscribe method which is firebase.unsubscribe() --> close the session*/
  }
  render() {

    return (
      <div >
        <GlobalStyle />
        <Header />
        <Annoucement
        title="Sample minimalist React JS Shopping Website"
        imageSource={trustyproducer}
        daysToLive={1} />
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />

              <Route exact path='/checkout' component={Checkout} />

              <Route render={()=><NotFound msg='Sorry a dog finds this page tasty, we cannot refuse a dog'/>}/> 

              </Switch>
         
            </Suspense>

          </ErrorBoundary>
  
   

    


        <Footer />


      </div>
    );

  }

}


const mapStateToProps = ({ user, shop }) => (
  {
    currentUser: user.currentUser,
    //collections:shop.collections
  }
)

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
