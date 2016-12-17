import * as types from '../actions/_constants';

const initialState = {
  initializeFirebaseStatus: '',
  downloadIdsStatus: '',
  downloadPharmaCareStatus: ''
};

export const downloadContent = (state = initialState, action) => {
  switch(action.type) {
    case types.INITIALIZE_FIREBASE_REQUEST: {
      return {
        ...state,
        initializeFirebaseStatus: action.status
      }
    }
    case types.INITIALIZE_FIREBASE_SUCCESS: {
      return {
        ...state,
        initializeFirebaseStatus: action.status
      }
    }
    case types.DOWNLOAD_IDS_REQUEST: {
      return {
        ...state,
        downloadIdsStatus: action.status
      }
    }
    case types.DOWNLOAD_IDS_FAILURE: {
      return {
        ...state,
        downloadIdsStatus: action.status
      }
    }
    case types.DOWNLOAD_IDS_SUCCESS: {
      return {
        ...state,
        downloadIdsStatus: action.status
      }
    }
    case types.DOWNLOAD_PHARMACARE_REQUEST: {
      return {
        ...state,
        downloadPharmaCareStatus: action.status
      }
    }
    case types.DOWNLOAD_PHARMACARE_FAILURE: {
      return {
        ...state,
        downloadPharmaCareStatus: action.status
      }
    }
    case types.DOWNLOAD_PHARMACARE_SUCCESS: {
      return {
        ...state,
        downloadPharmaCareStatus: action.status
      }
    }
    default:
      return state
  }
};