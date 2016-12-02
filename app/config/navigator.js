'use strict';
import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import {
  FooterTabsContainer,
  SplashContainer,
  MainContainer,
  RegulationsContainer,
  SchedulesContainer
} from '../containers';

const footerTabs = { id: 'FooterTabs', index: 99};

const routes = [
  { id: 'Splash', index: 0 },
  { id: 'Main', index: 1 },
  { id: 'Regulations', index: 2 },
  { id: 'Schedules', index: 3 },
  footerTabs
];

class SchemeNavigator extends Component {
  constructor(props){
    super(props);
    this.configureScene = this.configureScene.bind(this);
    this.getScene = this.getScene.bind(this);
  }
  configureScene(route) {
    return {
      ['Splash']: Navigator.SceneConfigs.PushFromRight,
    }[route.id]
  }
  getScene(route, navigator) {
    return {
      ['Splash']: <SplashContainer navigator={navigator} />,
      ['FooterTabs']: <FooterTabsContainer navigator={navigator} />,
      ['Main']: <MainContainer navigator={navigator} />,
      ['Regulations']: <RegulationsContainer navigator={navigator} />,
      ['Schedules']: <SchedulesContainer navigator={navigator} />,
    }[route.id];
  }
  render() {
    return(
      <Navigator
        initialRoute={footerTabs}
        initialRouteStack={routes}
        configureScene={this.configureScene}
        renderScene={this.getScene}
      />
    );
  }
}

SchemeNavigator.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default SchemeNavigator;