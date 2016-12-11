'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as footerTabActions from '../actions/footertabs';

import { FooterTabs } from '../components';

class FooterTabsWrapper extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.getPharmaCareChapters();
  }
  render() {
    return (
      <FooterTabs
        activeFooterTab={this.props.activeFooterTab}
        navigator={this.props.navigator}
        setFooterTab={this.props.setFooterTab}
        onSelectChapter={this.props.onSelectChapter}
        pharmaCareChapters={this.props.pharmaCareChapters}
      />
    )
  }
}
FooterTabsWrapper.propTypes = {
  getPharmaCareChapters: PropTypes.func.isRequired
};

const mapStateToProps = ({FooterTabs}, {navigator}) => {
  return {
    activeFooterTab: FooterTabs.activeFooterTab,
    pharmaCareChapters: FooterTabs.pharmaCareChapters,
    navigator
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...footerTabActions}, dispatch)
};
const FooterTabsContainer = connect(mapStateToProps, mapDispatchToProps)(FooterTabsWrapper);
export default FooterTabsContainer;