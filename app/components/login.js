'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator } from 'react-native';
import { connect } from 'react-redux';

const Login = ({ }) => (
  <View>

  </View>
);

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
