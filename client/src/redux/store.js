
import {createStore, applyMiddleware,compose, combineReducers} from 'redux';

import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';


import rootReducer from './root-reducer';


const composeEnhancers = process.env.NODE_ENV==='development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :''|| compose;

const middlewares=[thunk];


if (process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}
export const store=createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)));

export const persistor=persistStore(store);

export default {store, persistor};