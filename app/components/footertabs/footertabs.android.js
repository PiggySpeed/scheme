'use strict';
import React, { PropTypes } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';
import { colors, layouts } from '../../styles'

const FooterTabs = ({onTabSelect, navigator}) => (
  <DrawerLayoutAndroid
    drawerWidth={350}
    renderNavigationView={ () => (
      <Text>This is the Drawer</Text>
    )}
  >
    <View style={layouts.drawer}>
      <Text>Welcome!</Text>
    </View>
  </DrawerLayoutAndroid>
);
FooterTabs.propTypes = {
  setFooterTab: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default FooterTabs;