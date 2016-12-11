'use strict';
import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles';

const DrawerListHeader = ({ text, height, iconName, isSelected, onPress }) => {
  const color = isSelected ? colors.drawer.selected : colors.drawer.unselected;
  const backgroundColor = isSelected ? colors.drawerBackground.selected : colors.drawerBackground.unselected;
  const icon = !!iconName ? <Icon name={iconName} style={styles.icon} size={25} color={color} /> : null;
  return (
    <TouchableOpacity
      style={[ styles.container, {height}, { backgroundColor: backgroundColor } ]}
      onPress={onPress}
    >
      { icon }
      <Text style={{color: color}}>{text || 'Error - Undefined'}</Text>
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