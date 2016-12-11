import { retrievePharmaCareContent } from '../database/realm';
import {
  GET_PHARMACARE_CONTENT
} from './_constants';

// Get PharmaCare Data
export const getPharmaCareContent = (chapterId) => {
  return dispatch => {

    if(chapterId !== ''){
      const data = retrievePharmaCareContent(chapterId);

      dispatch({ type: GET_PHARMACARE_CONTENT, data });
    }
  }
};