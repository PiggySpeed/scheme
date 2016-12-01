'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import { layouts } from '../styles';

class Main extends Component {
  render() {
    return(
      <View style={layouts.container}>
        <TouchableHighlight onPress={this.props.onBackward}>
          <Text>{this.props.text}: thjis is maine</Text>
        </TouchableHighlight>
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
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;