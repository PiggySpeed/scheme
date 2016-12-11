import * as types from '../actions/_constants';

export const pharmaCareContent = (state = {id: '', title: '', text: '', references: []}, action) => {
  switch(action.type) {
    case types.GET_PHARMACARE_CONTENT: {
      return {
        ...action.data
      }
    }
    default:
      return state
  }
};