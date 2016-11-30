import * as types from '../actions/main';

const initialState = {
};

const Main = (state = initialState, action) => {
  switch(action.type) {
    case types.TEST_REDUCER: {
      return {
        ...state
      }
    }
    default:
      return state
  }
};
export default Main;