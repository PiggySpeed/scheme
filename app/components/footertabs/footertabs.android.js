'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';
import { colors, layouts } from '../../styles';
import Drawer from './drawer';
import Navbar from '../navbar/navbar';
import {
  MainContainer,
  PharmaCareContainer,
  SchedulesContainer,
  SettingsContainer
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
      ['Main']: <MainContainer /> ,
      ['PharmaCare']: <PharmaCareContainer />,
      ['Schedules']: <SchedulesContainer />,
      ['Settings']: <SettingsContainer />
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
            onSelectChapter={this.props.onSelectChapter}
            pharmaCareChapters={this.props.pharmaCareChapters}
          />
        )}
      >
        <Navbar title={this.props.activeFooterTab} openDrawer={this.openDrawer} />
        { this.getScene(this.props.activeFooterTab) }
      </DrawerLayoutAndroid>
    )
  }
}
FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  pharmaCareChapters: PropTypes.array.isRequired,
  setFooterTab: PropTypes.func.isRequired,
  onSelectChapter: PropTypes.func.isRequired
};

export default FooterTabs;