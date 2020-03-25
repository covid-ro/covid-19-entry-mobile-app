import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {reducer as registerReducer} from '../register/redux';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  register: registerReducer,
});

const persistConfig = {
  key: 'root',
  whitelist: ['register'],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
