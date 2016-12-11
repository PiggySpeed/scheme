'use strict';
import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import {
  FooterTabsContainer,
  SplashContainer,
  MainContainer,
  //PharmaCareContainer,
  //SchedulesContainer
} from '../containers';

const footerTabs = { id: 'FooterTabs', index: 99};
const routes = [
  { id: 'Splash', index: 0 },
  { id: 'Main', index: 1 },
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
      ['FooterTabs']: <FooterTabsContainer navigator={navigator} />,
      ['Splash']: <SplashContainer navigator={navigator} />,
      ['Main']: <MainContainer navigator={navigator} />
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