import React from 'react';

import {Switch,Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

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
function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exactpath='/shop' component={ShopPage}/>
      <Route path='/shop/hats' component={HatsPage}/>
      <Route path='/shop/womens' component={womenpage}/>

      </Switch>
   
    </div>
  );
}

export default App;
