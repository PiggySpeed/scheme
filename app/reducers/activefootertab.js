import * as types from '../actions/activefootertab';

const initialState = 'Main';

const activeFooterTab = (state = initialState, action) => {
  switch(action.type){
    case types.SET_FOOTER_TAB:
      return action.tab;
    default:
      return state
  }
};

export default activeFooterTab;