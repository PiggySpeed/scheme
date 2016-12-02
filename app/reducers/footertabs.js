import * as types from '../actions/_constants';

import { CONTENT_PATHS } from '../'

const initialState = {
  activeFooterTab: 'Main'
};

const FooterTabs = (state = initialState, action) => {
  switch(action.type){
    case types.SET_FOOTER_TAB:
      return {
          ...state,
          activeFooterTab: action.tab
        };
    case types.SELECT_CHAPTER:
      return {
        ...state,
        regulationsData: action.regulationsData
      };
    default:
      return state
  }
};

export default FooterTabs;