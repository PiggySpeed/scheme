'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './configureStore'

import { View, Navigator, TouchableHighlight } from 'react-native';
import LoginContainer from '../containers/login';
import MainContainer from '../containers/main';

const routes = [
  { id: 'Login', index: 0 },
  { id: 'Main', index: 1 },
];

class Routes extends Component {
  constructor(props){
    super(props);
    this.onForward = this.onForward.bind(this);
    this.onBackward = this.onBackward.bind(this);
    this.getScene = this.getScene.bind(this);
  }
  onForward(navigator, index) {
    if(index === 0) {
      navigator.push(routes[1]);
    } else {
      navigator.pop()
    }
  }
  onBackward(navigator, index) {
    navigator.pop()
  }
  getScene(route, navigator) {
    switch(route.id) {
      case 'Login':
        return (
          <LoginContainer
            onForward={() => this.onForward(navigator, route.id)}
            onBackward={() => this.onBackward(navigator, route.id)}
            text={route.id}
          />
        );
      case 'Main':
        return (
          <MainContainer
            onForward={() => this.onForward(navigator, route.id)}
            onBackward={() => this.onBackward(navigator, route.id)}
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
          renderScene={this.getScene}
          style={{padding: 100}}
        />
      </Provider>
    );
  }
}

export default Routes;