import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleare = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleare));
export const persistor = persistStore(store);

export default { store, persistor };