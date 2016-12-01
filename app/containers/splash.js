'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Splash from '../components/splash';
import { layouts } from '../styles';

class SplashWrapper extends Component {
  render() {
    return(
      <View style={layouts.container}>
        <Splash
          onForward={this.props.onForward}
          text={this.props.text}
        />
      </View>
    );
  }
}
SplashWrapper.propTypes = {
  onForward: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(SplashWrapper);
export default SplashContainer;