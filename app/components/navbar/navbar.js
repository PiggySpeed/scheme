'use strict';
import React, { PropTypes } from 'react';
import { View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Hamburger from '../icons/hamburger';
import { colors } from '../../styles';

const Navbar = ({title, openDrawer}) => (
  <NavigationBar
    style={{backgroundColor: colors.navbar, alignItems: 'center', paddingLeft: 10, paddingRight: 10}}
    title={{title}}
    leftButton={<Hamburger onPress={openDrawer}/>}
  />
);
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  openDrawer: PropTypes.func.isRequired,
};

export default Navbar;