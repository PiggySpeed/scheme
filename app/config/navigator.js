'use strict';
import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import {
  FooterTabsContainer,
  MainContainer,
} from '../containers';

const footerTabs = { id: 'FooterTabs', index: 99};
const routes = [
  { id: 'Main', index: 0 },
  footerTabs
];

class SchemeNavigator extends Component {
  constructor(props){
    super(props);
    this.getScene = this.getScene.bind(this);
  }
  getScene(route, navigator) {
    return {
      ['FooterTabs']: <FooterTabsContainer navigator={navigator} />,
      ['Main']: <MainContainer navigator={navigator} />
    }[route.id];
  }
  render() {
    return(
      <Navigator
        initialRoute={footerTabs}
        initialRouteStack={routes}
        renderScene={this.getScene}
      />
    );
  }
}

SchemeNavigator.propTypes = {
};

export default SchemeNavigator;