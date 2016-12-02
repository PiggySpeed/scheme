import { combineReducers } from 'redux';
import Main from './main';
import FooterTabs from './footertabs';

const rootReducer = combineReducers(
  {
    Main,
    FooterTabs
  }
);

export default rootReducer;