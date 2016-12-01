'use strict';
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles';

const Hamburger = ({size, style, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Icon
      name='ios-menu'
      size={size}
      colors={colors.grey}
    />
  </TouchableOpacity>
);
Hamburger.propTypes = {
  size: PropTypes.number.isRequired,
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired
};
Hamburger.defaultProps = {
  size: 30
};

export default Hamburger;