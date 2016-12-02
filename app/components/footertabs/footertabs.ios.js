'use strict';
import React, { PropTypes } from 'react';
import { Text, TabBarIOS } from 'react-native';

import { colors } from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  MainContainer,
  RegulationsContainer,
  SplashContainer,
  SchedulesContainer
} from '../../containers'

const FooterTabs = ({ activeFooterTab, onTabSelect, navigator }) => (
  <TabBarIOS tintColor={colors.active} >
    <Icon.TabBarItem
      iconSize={35}
      iconName='ios-home-outline'
      title='Main'
      selected={activeFooterTab === 'Main'}
      onPress={() => onTabSelect('Main')}
    >
      <MainContainer />
    </Icon.TabBarItem>

    <Icon.TabBarItem
      iconSize={35}
      iconName='ios-book'
      title='Regulations'
      selected={activeFooterTab === 'Regulations'}
      onPress={() => onTabSelect('Regulations')}
    >
      <RegulationsContainer />
    </Icon.TabBarItem>
  </TabBarIOS>
);
FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  setFooterTab: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default FooterTabs;