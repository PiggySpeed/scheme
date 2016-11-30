'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class Regulations extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onBackward}>
          <Text>{this.props.text}: this is regulations</Text>
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
const RegulationsContainer = connect(mapStateToProps, mapDispatchToProps)(Regulations);
export default RegulationsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
