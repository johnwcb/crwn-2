import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleare = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleare));

export default store;