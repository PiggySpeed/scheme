import { retrievePharmaCareChapters } from '../database/realm';
import {
  GET_PHARMACARE_CHAPTERS,
  SET_FOOTER_TAB,
  SELECT_CHAPTER,
} from './_constants';

// Load Chapters
export const getPharmaCareChapters = () => {
  return dispatch => {
    const data = retrievePharmaCareChapters();

    dispatch({ type: GET_PHARMACARE_CHAPTERS, data });
  }
};

// Navigation
export const setFooterTab = (tab) => {
  return dispatch => {
    dispatch({ type: SET_FOOTER_TAB, tab })
  }
};

export const onSelectChapter = (tab, id) => {
  return (dispatch, getState) => {
    const { chapterId } = getState().FooterTabs;
    dispatch(setFooterTab(tab));

    if(id !== chapterId){
      dispatch({ type: SELECT_CHAPTER, chapterId: id })
    }
  };
};