'use strict';
import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerListHeader = ({ text, height, iconName, isSelected, onPress }) => {
  const icon = !!iconName ? <Icon name={iconName} style={styles.icon} size={25} /> : null;
  return (
    <TouchableOpacity
      style={[ styles.container, {height}, { backgroundColor: isSelected ? '#D2D2D2' : '#FFFFFF' } ]}
      onPress={onPress}
    >
      { icon }
      <Text>{text || 'Error - Undefined'}</Text>
    </TouchableOpacity>
  )
};
DrawerListHeader.propTypes = {
  text: PropTypes.string,
  height: PropTypes.number,
  iconName: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
  },
  icon: {
    marginLeft: 15,
    marginRight: 10
  },
});

export default DrawerListHeader;