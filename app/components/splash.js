'use strict';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Splash = ({ onForward, text }) => (
  <View>
    <Text>This is the splash Screen!!!</Text>
    <Button
      title={text}
      onPress={onForward}
    />
  </View>
);

export default Splash;

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
