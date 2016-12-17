'use strict';
import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import DrawerTab from './drawertab';
import DrawerList from './drawerlist';
import { logos } from '../../styles';

const Drawer = ({ activeFooterTab, onTabSelect, onSelectChapter, onClose, pharmaCareChapters }) => (
  <View>
    <View style={styles.header}>
      <Image style={[logos.logoSmall]} source={require('../../assets/scheme_logo_small.png')} />
      <Text style={styles.logoText}>
        S C H E M E
      </Text>
    </View>
    <DrawerTab
      title='Home'
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
      selected={activeFooterTab === 'PharmaCare'}
      chapters={pharmaCareChapters}
      onSelectChapter={onSelectChapter}
      onClose={onClose}
    />
    <DrawerTab
      title='Drug Schedules'
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

const styles = {
  logoText: {
    fontSize: 20,
    paddingLeft: 15
  },
  header: {
    flexDirection: 'row',
    height: 75,
    paddingLeft: 15,
    alignItems: 'center',
    borderBottomColor: '#c1c1c1',
    borderBottomWidth: 0.5
  }
};

export default Drawer;