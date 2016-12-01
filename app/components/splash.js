'use strict';
import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { layouts, logos } from '../styles';

const Splash = () => (
  <View style={layouts.container}>
    <Image source={require('../assets/bear-color.png')} style={logos.logoMedium} />
    <Text>Welcome to Scheme</Text>
  </View>
);

export default Splash;
