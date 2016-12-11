import { combineReducers } from 'redux';
import Main from './main';
import FooterTabs from './footertabs';
import {pharmaCareContent} from './pharmacare';
import {downloadContent} from './database';

const rootReducer = combineReducers(
  {
    Main,
    FooterTabs,
    pharmaCareContent,
    downloadContent
  }
);

export default rootReducer;