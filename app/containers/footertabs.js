'use strict';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as activeFooterTabActions from '../actions/activefootertab';

import { FooterTabs } from '../components';

const mapStateToProps = ({activeFooterTab}, {navigator}) => {
  return {
    activeFooterTab,
    navigator
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...activeFooterTabActions}, dispatch)
};
const FooterTabsContainer = connect(mapStateToProps, mapDispatchToProps)(FooterTabs);
export default FooterTabsContainer;