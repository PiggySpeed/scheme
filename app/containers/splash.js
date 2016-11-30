'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import Splash from '../components/splash';

class SplashWrapper extends Component {
  render() {
    return(
      <View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
