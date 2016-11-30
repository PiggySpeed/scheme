'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './configureStore'

import { Navigator } from 'react-native';
import SplashContainer from '../containers/splash';
import LoginContainer from '../containers/login';
import MainContainer from '../containers/main';
import RegulationsContainer from '../containers/regulations';

const routes = [
  { id: 'Splash', index: 0 },
  { id: 'Login', index: 1 },
  { id: 'Main', index: 2 },
  { id: 'Regulations', index: 3 },
];

class SchemeNavigator extends Component {
  constructor(props){
    super(props);
    this.configureScene = this.configureScene.bind(this);
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
      case 'Splash':
        return (
          <SplashContainer
            onForward={() => this.onForward(navigator, route.index)}
            text={route.id}
          />
        );
      case 'Login':
        return (
          <LoginContainer
            onForward={() => this.onForward(navigator, route.index)}
            onBackward={() => this.onBackward(navigator, route.index)}
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
      <Provider store={store}>
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          configureScene={this.configureScene}
          renderScene={this.getScene}
          style={{padding: 100}}
        />
      </Provider>
    );
  }
}

export default SchemeNavigator;