import { retrievePharmaCareContent } from '../database/realm';
import {
  GET_PHARMACARE_CONTENT
} from './_constants';

// Get PharmaCare Data
export const getPharmaCareContent = (chapterId) => {
  return dispatch => {
    console.log('action called with id ', chapterId);

    if(chapterId){
      const data = retrievePharmaCareContent(chapterId);

      dispatch({ type: GET_PHARMACARE_CONTENT, data });
    }
  }
};