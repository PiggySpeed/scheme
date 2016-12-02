'use strict';
import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const DrawerListItem = ({ index, text, height, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[ styles.container, {height}, { backgroundColor: isSelected ? '#D2D2D2' : '#FFFFFF' } ]}
      onPress={onPress}
    >
      <Text style={styles.index}>{index}.</Text>
      <Text style={styles.text}>{text || 'Error - Undefined'}</Text>
    </TouchableOpacity>
  )
};
DrawerListItem.propTypes = {
  index: PropTypes.number,
  text: PropTypes.string,
  height: PropTypes.number,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
  },
  index: {
    textAlign: 'right',
    width: 35
  },
  text: {
    marginLeft: 10
  }
});

export default DrawerListItem;