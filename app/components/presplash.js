'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors } from '../styles';

class PreSplash extends Component {
  state = {
    rotation: new Animated.Value(0)
  };
  componentDidMount() {
    this.interval = setInterval( () => {
      Animated.sequence([
        Animated.timing(this.state.rotation, {toValue: -1, duration: 75}),
        Animated.timing(this.state.rotation, {toValue: 1, duration: 75}),
        Animated.timing(this.state.rotation, {toValue: 0, duration: 250})
      ]).start()
    }, 1000)
  }
  componentWillUnmount(){
    window.clearInterval(this.interval);
  }
  getTransform(){
    return {
      transform: [
        {
          rotate: this.state.rotation.interpolate({
            inputRange: [-1, 1],
            outputRange: ['-20deg', '20deg']
          })
        }
      ]
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>PreSplash  Screen!!!</Text>
        <Animated.Image
          style={[styles.logo, this.getTransform()]}
          source={require('../assets/bear-color.png')}
        />
      </View>
    );
}
}
PreSplash.propTypes = {

};


export default PreSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    resizeMode: 'contain',
    width: 50
  }
});
