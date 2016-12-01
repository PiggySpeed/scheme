'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { layouts } from '../styles';

class Main extends Component {
  render() {
    return(
      <View style={layouts.column}>
        <Text>This is Main Container</Text>
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