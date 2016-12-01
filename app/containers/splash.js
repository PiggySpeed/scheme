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
        <Splash />
      </View>
    );
  }
}
SplashWrapper.propTypes = {
};

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(SplashWrapper);
export default SplashContainer;