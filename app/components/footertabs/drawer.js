'use strict';
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import DrawerHeader from './drawerheader';
import DrawerTab from './drawertab';

const Drawer = ({ activeFooterTab, onTabSelect, onClose }) => (
  <View>
    <DrawerHeader />
    <DrawerTab
      title='Main'
      iconName='ios-home-outline'
      selected={activeFooterTab === 'Main'}
      onPress={() => {
        onTabSelect('Main');
        onClose();
      }}
    />
    <DrawerTab
      title='Regulations'
      iconName='ios-book'
      selected={activeFooterTab === 'Regulations'}
      onPress={() => {
        onTabSelect('Regulations');
        onClose();
      }}
    />
  </View>
);
Drawer.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Drawer;