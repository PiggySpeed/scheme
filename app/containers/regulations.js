'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import { layouts } from '../styles';

class Regulations extends Component {
  render() {
    return(
      <View style={layouts.container}>
        <Text>This is Regulations container</Text>
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
const RegulationsContainer = connect(mapStateToProps, mapDispatchToProps)(Regulations);
export default RegulationsContainer;