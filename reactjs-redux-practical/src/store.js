import { configureStore } from '@reduxjs/toolkit';
import {combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ProductReducer from './reducers/ProductsReducer';

const reducer = combineReducers({
    Product: ProductReducer
});

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = configureStore({
    reducer,
    composedEnhancers
})

export default store;