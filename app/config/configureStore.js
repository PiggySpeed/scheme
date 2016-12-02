import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import devTools from 'remote-redux-devtools';

const configureStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    devTools()
  )
);
export default configureStore;