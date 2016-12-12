'use strict';
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, StyleSheet, Animated, Easing, Text } from 'react-native';
import DrawerListItem from './drawerlistitem';
import DrawerListHeader from './drawerlistheader';

const generateId = (start) => {
  let id = start;
  return () => {
    return id++
  }
};
const getId = generateId(20);

class DrawerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      height: new Animated.Value(this.props.height),
      chapterId: ''
    };
    this.getHeight = this.getHeight.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onSelectChapter = this.onSelectChapter.bind(this);
  }
  get fullListHeight() {
    return this.props.height * (this.props.chapters.length + 1);
  }
  getHeight(){
    return this.state.isOpen
      ? this.props.height
      : this.fullListHeight
  }
  onToggle(){
    this.props.onSelectChapter(this.props.route, ''); // navigate to the section home page
    Animated.timing(this.state.height, {toValue: this.getHeight(), duration: 200}).start();
    this.setState({ isOpen: !this.state.isOpen })
  }
  onSelectChapter(chapterId) {
    this.setState({ chapterId });
    this.props.onClose();
    this.props.onSelectChapter(this.props.route, chapterId);
  }
  render() {
    return(
      <TouchableOpacity style={{ height: this.state.height }} >

        <DrawerListHeader
          text={this.props.title}
          iconName={this.props.iconName}
          height={this.props.height}
          isSelected={this.state.isOpen && this.props.selected}
          onPress={this.onToggle}
        />

        { this.props.chapters.map( (item, id) =>
          <DrawerListItem
            key={getId()}
            index={id + 1}
            text={item.title}
            height={this.props.height}
            isSelected={(this.state.chapterId === item.id) && this.props.selected}
            onPress={() => this.onSelectChapter(item.id)}
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
  height: PropTypes.number,
  selected: PropTypes.bool,
  chapters: PropTypes.array,
  onSelectChapter: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};
DrawerList.defaultProps = {
  height: 35
};


export default DrawerList;