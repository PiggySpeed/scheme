import { combineReducers } from 'redux';
import Main from './main';
import activeFooterTab from './activefootertab';

const rootReducer = combineReducers(
  {
    Main,
    activeFooterTab
  }
);

export default rootReducer;