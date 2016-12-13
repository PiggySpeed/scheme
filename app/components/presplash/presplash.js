'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text, Animated, TouchableOpacity, Image } from 'react-native';
import { colors, logos, layouts, fontSizes } from '../../styles';

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
      <View style={layouts.container}>
        <Image style={[logos.logoLarge]} source={require('../../assets/scheme_splash_logo_hdpi.png')}/>
        <Text style={{fontSize: fontSizes.l, color: '#c3c3c3'}}>S C H E M E</Text>
        <TouchableOpacity onPress={this.props.handleClick}>
          <Text style={styles.entry}>ENTER</Text>
        </TouchableOpacity>
        <Text>(C) John Lee, 2016</Text>
      </View>
    );
}
}
PreSplash.propTypes = {
  handleClick: PropTypes.func.isRequired
};

//<Animated.Image
//  style={[logos.logoSmall, this.getTransform()]}
//  source={require('../../assets/bear-color.png')}
///>

const styles = {
  entry: {
    marginTop: 40,
    textAlign: 'center',
    color: '#c3c3c3',
    fontSize: 18,
    height: 200,
    width: 100
  }
};

export default PreSplash;