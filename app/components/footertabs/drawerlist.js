'use strict';
import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import DrawerListItem from './drawerlistitem';
import DrawerListHeader from './drawerlistheader';

class DrawerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      height: new Animated.Value(this.props.height),
      currentListItem: ''
    };
    this.getHeight = this.getHeight.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onSelectChapter = this.onSelectChapter.bind(this);
  }
  get fullListHeight() {
    return this.props.height * this.props.data.length;
  }
  getHeight(){
    return this.state.isOpen
      ? this.props.height
      : this.fullListHeight
  }
  onToggle(){
    this.props.onSelectChapter(this.props.route, this.props.home.route);
    Animated.timing(this.state.height, {toValue: this.getHeight(), duration: 200}).start();
    this.setState({ isOpen: !this.state.isOpen })
  }
  onSelectChapter(currentListItem) {
    this.setState({ currentListItem });
    this.props.onSelectChapter(this.props.route, currentListItem);
  }
  render() {
    return(
      <TouchableOpacity style={{ height: this.state.height }} >

        <DrawerListHeader
          text={this.props.title}
          iconName={this.props.iconName}
          height={this.props.height}
          isSelected={this.state.isOpen}
          onPress={this.onToggle}
        />

        { this.props.data.map( (item, id) =>
          <DrawerListItem
            key={item.id}
            index={id + 1}
            text={item.text}
            height={this.props.height}
            isSelected={this.state.currentListItem === item.route}
            onPress={() => this.onSelectChapter(item.route)}
          />
        )}

      </TouchableOpacity>
    );
  }
}
DrawerList.propTypes = {
  activeFooterTab: PropTypes.string,
  iconName: PropTypes.string,
  title: PropTypes.string,
  route: PropTypes.string,
  home: PropTypes.object,
  height: PropTypes.number,
  data: PropTypes.array,
  selectChapter: PropTypes.func,
};
DrawerList.defaultProps = {
  height: 35
};


export default DrawerList;