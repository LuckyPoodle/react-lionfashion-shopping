import React from 'react';

import {Switch,Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import {auth} from './firebase/fire.util';

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

  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  /*this is a method that go into the prototype Object (outside constructor) ES6 dunnid declare with var/const/let*/
  unsubscribeFromAuth=null;



  componentDidMount(){
    /*unsubscribeFromAuth is reassigned to the return value of auth.onAuthStateChanged() which is firebase.unsubscribe()*/
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); /* this is calling the returned firebase.Unsubscribe method which is firebase.unsubscribe() --> close the session*/
  }
  render(){

    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
        <Route path='/shop/hats' component={HatsPage}/>
        <Route path='/shop/womens' component={womenpage}/>
  
        </Switch>
     
      </div>
    );

  }

}

export default App;
