import { storePharmaCare, retrievePharmaCareContent } from '../database/realm';
import { getPharmaCare } from '../database/firebase';
import {
  BUILD_REALM_SCHEMA,
  DOWNLOAD_PHARMACARE_REQUEST,
  DOWNLOAD_PHARMACARE_FAILURE,
  DOWNLOAD_PHARMACARE_SUCCESS
} from './_constants';


// Download PharmaCare Data
export const downloadPharmaCareRequest = () => {
  return { type: DOWNLOAD_PHARMACARE_REQUEST, status: 'Downloading PharmaCare Data...' }
};
export const downloadPharmaCareFailure = () => {
  return { type: DOWNLOAD_PHARMACARE_FAILURE, status: 'There was an error downloading PharmaCare data'  }
};
export const downloadPharmaCareSuccess = (data) => {
  storePharmaCare(data);
  return { type: DOWNLOAD_PHARMACARE_SUCCESS, status: 'Downloaded PharmaCare Data!' }
};
export const downloadPharmaCare = (blogPost) => {
  return dispatch => {
    dispatch(downloadPharmaCareRequest());

    return dispatch(downloadPharmaCareSuccess(getPharmaCare()));
  }
};


