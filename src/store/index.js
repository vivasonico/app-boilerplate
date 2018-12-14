import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducers from '../reducers';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

// const persistConfig = {
//   key: root;
//   storage,
//   whitelist: ['likedJobs']
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk),
    ),
  );

  // const persistor = persistStore(store);

  return { store };
};
