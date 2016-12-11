'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pharmacareActions from '../actions/pharmacare';

import { PharmaCareHome, PharmaCareContent } from '../components';

class PharmaCare extends Component {
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.contentId !== nextProps.contentId){
      this.props.getPharmaCareContent(nextProps.contentId)
    }
  }
  render() {

    if(this.props.contentId){
      return (
        <PharmaCareContent
          data={this.props.pharmaCareContent}
        />
      )
    } else {
      return <PharmaCareHome />
    }
  }
}
PharmaCare.propTypes = {
  contentId: PropTypes.string.isRequired,
  downloadPharmaCare: PropTypes.func.isRequired,
  getPharmaCareContent: PropTypes.func.isRequired
};

const mapStateToProps = ({pharmaCareContent, FooterTabs}, {navigator}) => {
  return {
    navigator,
    pharmaCareContent,
    contentId: FooterTabs.chapterId
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...pharmacareActions}, dispatch)
};
const RegulationsContainer = connect(mapStateToProps, mapDispatchToProps)(PharmaCare);
export default RegulationsContainer;