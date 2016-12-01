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
        size={35}
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
    margin: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    fontSize: fontSizes.secondary,
    marginLeft: 10
  }
};

export default DrawerTab;