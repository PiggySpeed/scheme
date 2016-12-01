'use strict';
import React, { PropTypes } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';

const FooterTabs = ({onTabSelect, navigator}) => (
  <DrawerLayoutAndroid
    drawerWidth={300}
    renderNavigationView={ () => (
      <Text>This is the Drawer</Text>
    )}
  >
  </DrawerLayoutAndroid>
);
FooterTabs.propTypes = {
  setFooterTab: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default FooterTabs;