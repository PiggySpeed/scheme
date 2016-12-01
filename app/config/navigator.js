'use strict';
import React, { Component, PropTypes } from 'react';

import { Navigator } from 'react-native';
import FooterTabsContainer from '../containers/footertabs';
import SplashContainer from '../containers/splash';
import LoginContainer from '../containers/login';
import MainContainer from '../containers/main';
import RegulationsContainer from '../containers/regulations';

const routes = [
  { id: 'FooterTabs', index: 99 },
  { id: 'Splash', index: 0 },
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
      ['Splash']: <SplashContainer />,
    }[route.id];
  }
  render() {
    return(
      <Navigator
        initialRoute={routes[0]}
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