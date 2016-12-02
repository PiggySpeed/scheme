import {
  SET_FOOTER_TAB,
  SELECT_CHAPTER
} from './_constants';

export const setFooterTab = (tab) => {
  return {
    type: SET_FOOTER_TAB,
    tab
  }
};

export const selectChapter = (section, chapter) => {
  const regulationsData = section + chapter;

  return {
    type: SELECT_CHAPTER,
    regulationsData: ''
  }
};