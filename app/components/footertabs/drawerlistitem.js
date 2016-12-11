'use strict';
import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles';

const DrawerListItem = ({ index, text, height, isSelected, onPress }) => {
  const color = isSelected ? colors.drawer.selected : colors.drawer.unselected;
  const backgroundColor = isSelected ? colors.drawerBackground.selected : colors.drawerBackground.unselected;
  return (
    <TouchableOpacity
      style={[ styles.container, {height}, { backgroundColor: backgroundColor } ]}
      onPress={onPress}
    >
      <Text style={[styles.index, {color}]}>{index}.</Text>
      <Text style={[styles.text, {color}]}>{text || 'Error - Undefined'}</Text>
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