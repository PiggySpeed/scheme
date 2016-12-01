'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import { layouts } from '../styles';

class Login extends Component {
  render() {
    return(
      <View style={layouts.container}>
        <Text>Login Container!</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;