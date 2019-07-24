import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import products from './products/reducers';

const rootReducer = combineReducers({products});

const middleWares = [thunk, logger];

const enhancers = applyMiddleware(...middleWares);

const configureStore = createStore(rootReducer, composeWithDevTools(enhancers));

export default configureStore;
