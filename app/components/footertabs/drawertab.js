'use strict';
import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fontSizes } from '../../styles';

const DrawerTab = ({ title, selected, onPress, iconName }) => {
  const color = selected ? colors.drawer.selected : colors.drawer.unselected;
  return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        name={iconName}
        style={styles.icon}
        size={25}
        color={color}
      />
      <Text style={[styles.titleText, {color}]}>{title}</Text>
    </TouchableOpacity>
  )
};
DrawerTab.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35
  },
  titleText: {
    fontSize: fontSizes.secondary,
  },
  icon: {
    marginLeft: 15,
    marginRight: 10
  },
};

export default DrawerTab;