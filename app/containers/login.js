'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class Login extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>{this.props.text}: Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
Login.propTypes = {
  onForward: PropTypes.func,
  text: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;