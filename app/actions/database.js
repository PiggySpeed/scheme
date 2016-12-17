import { updateIds, retrieveIds, storePharmaCare, retrievePharmaCareContent } from '../database/realm';
import { getIds, getPharmaCare } from '../database/firebase';
import { buildSchema } from '../database/initializefirebase';
import {
  BUILD_REALM_SCHEMA,
  INITIALIZE_FIREBASE_REQUEST,
  INITIALIZE_FIREBASE_SUCCESS,
  DOWNLOAD_IDS_REQUEST,
  DOWNLOAD_IDS_FAILURE,
  DOWNLOAD_IDS_SUCCESS,
  DOWNLOAD_PHARMACARE_REQUEST,
  DOWNLOAD_PHARMACARE_FAILURE,
  DOWNLOAD_PHARMACARE_SUCCESS
} from './_constants';

// Initialize Firebase with Mock Data
export const initializeFirebaseRequest = (text) => {
  return { type: INITIALIZE_FIREBASE_REQUEST, status: text }
};
export const initializeFirebaseSuccess = () => {
  return { type: INITIALIZE_FIREBASE_SUCCESS, status: 'Firebase initialized - Download PharmaCare Data Next' }
};
export const initializeFirebase = () => {
  return dispatch => {
    buildSchema((text) => dispatch(initializeFirebaseRequest(text)));

    return initializeFirebaseSuccess()
  }
};


// Get Data Ids
export const downloadIdsRequest = () => {
  return { type: DOWNLOAD_IDS_REQUEST, status: 'Downloading PharmaCare Data...' }
};
export const downloadIdsFailure = () => {
  return { type: DOWNLOAD_IDS_FAILURE, status: 'There was an error downloading PharmaCare data'  }
};
export const downloadIdsSuccess = (data) => {
  updateIds(data);
  return { type: DOWNLOAD_IDS_SUCCESS, status: 'Downloaded Ids!' }
};
export const downloadIds = () => {
  return dispatch => {
    dispatch(downloadIdsRequest());

    return getIds()
      .then( val => dispatch(downloadIdsSuccess(val)))
  }
};


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
export const downloadPharmaCare = () => {
  return dispatch => {
    dispatch(downloadPharmaCareRequest());
    const pharmaCareId = retrieveIds().pharmaCare;

    return getPharmaCare(pharmaCareId)
      .then( res => dispatch(downloadPharmaCareSuccess(res)));
  }
};


