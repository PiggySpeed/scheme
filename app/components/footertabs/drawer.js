'use strict';
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import DrawerTab from './drawertab';
import DrawerList from './drawerlist';

const Drawer = ({ activeFooterTab, onTabSelect, onSelectChapter, onClose, pharmaCareChapters }) => (
  <View>
    <Text>
      Header
    </Text>
    <DrawerTab
      title='Main'
      iconName='ios-home-outline'
      selected={activeFooterTab === 'Main'}
      onPress={() => {
        onTabSelect('Main');
        onClose();
      }}
    />
    <DrawerList
      activeFooterTab={activeFooterTab}
      iconName='ios-book-outline'
      title='PharmaCare'
      route='PharmaCare'
      height={35}
      chapters={pharmaCareChapters}
      onSelectChapter={onSelectChapter}
      onClose={onClose}
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
    <DrawerTab
      title='Settings'
      iconName='ios-settings'
      selected={activeFooterTab === 'Settings'}
      onPress={() => {
        onTabSelect('Settings');
        onClose();
      }}
    />

  </View>
);
Drawer.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelectChapter: PropTypes.func.isRequired,
  pharmaCareChapters: PropTypes.array.isRequired
};

export default Drawer;