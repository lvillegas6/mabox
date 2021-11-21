import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { config } from '@/config';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

import authReducer from '@/store/auth';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};


const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  config.dev && composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store);
export { store, persistor };
