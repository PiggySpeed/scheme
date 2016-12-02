'use strict';
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import DrawerHeader from './drawerheader';
import DrawerTab from './drawertab';
import DrawerList from './drawerlist';

const MOCK_DATA = {
  home: {id: 27, text: 'Regulations', route: 'R0'},
  items: [
  { id: 34, text: 'Regulations 1', route: 'R1' },
  { id: 54, text: 'Regulations 2', route: 'R2' },
  { id: 64, text: 'Regulations 3', route: 'R3' },
  { id: 23, text: 'Regulations 4', route: 'R4' },
  { id: 96, text: 'Regulations 5', route: 'R5' },
]};

const Drawer = ({ activeFooterTab, onTabSelect, selectChapter, onClose }) => (
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
    <DrawerTab
      title='Schedules'
      iconName='ios-list-box'
      selected={activeFooterTab === 'Schedules'}
      onPress={() => {
        onTabSelect('Schedules');
        onClose();
      }}
    />
    <DrawerList
      activeFooterTab={activeFooterTab}
      iconName='ios-home-outline'
      title='Testing'
      home={MOCK_DATA.home}
      route='Regulations'
      height={35}
      data={MOCK_DATA.items}
      onSelectChapter={selectChapter}
    />

  </View>
);
Drawer.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  selectChapter: PropTypes.func.isRequired,
};

export default Drawer;