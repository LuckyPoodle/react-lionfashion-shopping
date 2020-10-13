import React from 'react';

import {Switch,Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import {auth,createUserProfileDocument} from './firebase/fire.util';

const HatsPage=()=>(
  <div>
    <h1>HATS page</h1>
  </div>
)



const womenpage=()=>(
  <div>
    <h1>women page</h1>
  </div>
)

class App extends React.Component {

 

  /*this is a method that go into the prototype Object (outside constructor) ES6 dunnid declare with var/const/let*/
  unsubscribeFromAuth=null;



  componentDidMount(){

    const {setCurrentUser}=this.props;



    /*unsubscribeFromAuth is reassigned to the return value of auth.onAuthStateChanged() which is firebase.unsubscribe()*/
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{

      if (user){
          
       const userRef= await createUserProfileDocument(user);
       userRef.onSnapshot(snapShot =>{  /*what we got back is a snapshot object */
         setCurrentUser({
          id:snapShot.id,
          ...snapShot.data()
         }
         
         )
         console.log("***************snapshot*********************");
      console.log(snapShot.id); 
      console.log(snapShot.data); 

       });

       
      }
      setCurrentUser(user);
      console.log("***************user*********************");
      console.log(user);


    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); /* this is calling the returned firebase.Unsubscribe method which is firebase.unsubscribe() --> close the session*/
  }
  render(){

    return (
      <div >
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/' />):(<SignInAndSignUpPage />)}/>
        <Route path='/shop/hats' component={HatsPage}/>
        <Route path='/shop/womens' component={womenpage}/>
  
        </Switch>
     
      </div>
    );

  }

}


const mapStateToProps=({user})=>(
  {
    currentUser:user.currentUser
  }
)

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
