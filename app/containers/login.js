'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import { layouts } from '../styles';

class Login extends Component {
  render() {
    return(
      <View style={layouts.container}>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>{this.props.text}: Tap me to load the next scene</Text>
        </TouchableHighlight>
        <Button
          title='View PreSplash Screen'
          onPress={this.props.handleClick}
        />
      </View>
    );
  }
}
Login.propTypes = {
  onForward: PropTypes.func,
  text: PropTypes.string,
  handleClick: PropTypes.func
};

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;