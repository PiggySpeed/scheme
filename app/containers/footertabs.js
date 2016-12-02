'use strict';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as activeFooterTabActions from '../actions/footertabs';

import { FooterTabs } from '../components';

const mapStateToProps = ({FooterTabs}, {navigator}) => {
  return {
    activeFooterTab: FooterTabs.activeFooterTab,
    navigator
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...activeFooterTabActions}, dispatch)
};
const FooterTabsContainer = connect(mapStateToProps, mapDispatchToProps)(FooterTabs);
export default FooterTabsContainer;