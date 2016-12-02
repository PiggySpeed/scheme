'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';
import { colors, layouts } from '../../styles';
import Drawer from './drawer';
import Navbar from '../navbar/navbar';
import {
  MainContainer,
  RegulationsContainer,
  SplashContainer,
  SchedulesContainer
} from '../../containers';


class FooterTabs extends Component {
  constructor(props){
    super(props);
    this.getScene = this.getScene.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }
  getScene(key) {
    const scene = {
      ['Splash']: <SplashContainer />,
      ['Main']: <MainContainer /> ,
      ['Regulations']: <RegulationsContainer />,
      ['Schedules']: <SchedulesContainer />,
    }[key];
    return scene || <SplashContainer />;
  };
  openDrawer(){
    this.drawer.openDrawer();
  };
  closeDrawer(){
    this.drawer.closeDrawer();
  };
  render() {
    return (
      <DrawerLayoutAndroid
        style={{flex: 1}}
        ref={ drawer => this.drawer = drawer }
        drawerWidth={300}
        keyboardDismissMode='on-drag'
        renderNavigationView={ () => (
          <Drawer
            activeFooterTab={this.props.activeFooterTab}
            onTabSelect={this.props.setFooterTab}
            onClose={this.closeDrawer}
            selectChapter={this.props.selectChapter}
          />
        )}
      >
        <Navbar title={this.props.activeFooterTab} openDrawer={this.openDrawer} />
        { this.getScene(this.props.activeFooterTab) }
      </DrawerLayoutAndroid>
    )
  }
};
FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  setFooterTab: PropTypes.func.isRequired,
  selectChapter: PropTypes.func.isRequired,
};

export default FooterTabs;