'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import { layouts } from '../styles';
import Markdown from 'react-native-simple-markdown';

import Post from '../content';


class Regulations extends Component {
  render() {
    return(
      <View style={layouts.container}>
        <Markdown>
          {Post}
        </Markdown>

        <Text>{this.props.regulationsData}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, {navigator, regulationsData}) => {
  return {
    navigator,
    regulationsData
  }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const RegulationsContainer = connect(mapStateToProps, mapDispatchToProps)(Regulations);
export default RegulationsContainer;