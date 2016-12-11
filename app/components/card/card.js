'use strict';
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { fontSizes } from '../../styles';

const Card = ({title, text}) => (
  <View style={styles.container} elevation={1}>
    <Text style={{fontSize: fontSizes.l}}>{title}</Text>
    <Text>{text}</Text>
  </View>
);
Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
const styles = {
  container: {
    padding: 10,
    margin: 10,
    minHeight: 300,
    backgroundColor: '#ffffff'
  }
};


export default Card;