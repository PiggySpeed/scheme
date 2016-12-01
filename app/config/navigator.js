'use strict';
import React, { Component, PropTypes } from 'react';

import { Navigator } from 'react-native';
import FooterTabsContainer from '../containers/footertabs';
import SplashContainer from '../containers/splash';
import LoginContainer from '../containers/login';
import MainContainer from '../containers/main';
import RegulationsContainer from '../containers/regulations';

const footertabs = { id: 'FooterTabs', index: 99 };

const routes = [
  { id: 'FooterTabs', index: 99 },
  { id: 'Splash', index: 0 },
  { id: 'Login', index: 1 },
  { id: 'Main', index: 2 },
  { id: 'Regulations', index: 3 },
];

class SchemeNavigator extends Component {
  constructor(props){
    super(props);
    this.configureScene = this.configureScene.bind(this);
    this.onOpenFooterTabs = this.onOpenFooterTabs.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onBackward = this.onBackward.bind(this);
    this.getScene = this.getScene.bind(this);
  }
  configureScene(route, routeStack) {
    return {
      ['Splash']: Navigator.SceneConfigs.PushFromRight,
      ['Login']: Navigator.SceneConfigs.PushFromRight,
      ['Main']: Navigator.SceneConfigs.FloatFromLeft,
      ['Regulations']: Navigator.SceneConfigs.PushFromLeft,
    }[route.id]
  }
  onOpenFooterTabs(navigator){
    navigator.push(footertabs);
  }
  onForward(navigator, index) {
    if(index < routes.length) {
      navigator.push(routes[index + 1]);
    } else {
      navigator.pop()
    }
  }
  onBackward(navigator, index) {
    navigator.pop()
  }
  getScene(route, navigator) {
    switch(route.id) {
      case 'FooterTabs':
        return (
          <FooterTabsContainer
            navigator={navigator}
          />
        );
      case 'Splash':
        return (
          <SplashContainer
            //onForward={() => this.onForward(navigator, route.index)}
            onForward={() => this.onOpenFooterTabs()}
            text={route.id}
          />
        );
      case 'Login':
        return (
          <LoginContainer
            onForward={() => this.onForward(navigator, route.index)}
            onBackward={() => this.onBackward(navigator, route.index)}
            handleClick={this.props.handleClick}
            text={route.id}
          />
        );
      case 'Main':
        return (
          <MainContainer
            onForward={() => this.onForward(navigator, route.index)}
            onBackward={() => this.onBackward(navigator, route.index)}
            text={route.id}
          />
        );
      case 'RegulationsContainer':
        return (
          <RegulationsContainer
            onForward={() => this.onForward(navigator, route.index)}
            onBackward={() => this.onBackward(navigator, route.index)}
            text={route.id}
          />
        );
      default:
        return
    }
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