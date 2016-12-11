import * as types from '../actions/_constants';

const initialState = {
  activeFooterTab: 'Main',
  chapterId: '',
  pharmaCareChapters: []
};

const FooterTabs = (state = initialState, action) => {
  switch(action.type){
    case types.SET_FOOTER_TAB:
      return {
          ...state,
          activeFooterTab: action.tab
        };
    case types.SELECT_CHAPTER:
      return {
        ...state,
        chapterId: action.chapterId
      };
    case types.GET_PHARMACARE_CHAPTERS:
      return {
        ...state,
        pharmaCareChapters: action.data
      };
    default:
      return state
  }
};

export default FooterTabs;