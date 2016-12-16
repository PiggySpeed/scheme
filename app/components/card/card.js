'use strict';
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { fontSizes, colors } from '../../styles';

const Card = ({title, text, timestamp}) => (
  <View style={styles.container} elevation={1}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.bodyText}>{text}</Text>
    <Text style={styles.timestamp}>timestamp</Text>
  </View>
);
Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.string
};
const styles = {
  container: {
    padding: 10,
    margin: 10,
    minHeight: 150,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: fontSizes.l,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    marginBottom: 10
  },
  bodyText: {
    minHeight: 100
  },
  timestamp: {
    alignSelf: 'flex-end',
    height: 20
  }
};


export default Card;