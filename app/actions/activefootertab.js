import {
  SET_FOOTER_TAB
} from './_constants';

export const setFooterTab = (tab) => {
  return {
    type: SET_FOOTER_TAB,
    tab
  }
};