import * as types from '../actions/activefootertab';

const initialState = 'Main';

const activeFooterTabs = (state = initialState, action) => {
  switch(action.type){
    case types.SET_FOOTER_TAB:
      return action.tab
    default:
      return state
  }
};