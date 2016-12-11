'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import { layouts } from '../styles';
import { Card } from '../components';

const MOCK_DATA = [
  { id: '231', title: 'WELCOME TO SCHEME', text: 'Welcome to Scheme! You can look up pharmacare policies on your left.'},
  { id: '424', title: 'Update 1', text: 'This is update 1.'},
  { id: '746', title: 'Update 2', text: 'This is update 2.'}
];

class Main extends Component {
  render() {
    return(
      <ScrollView>
        {MOCK_DATA.map( item => <Card key={item.id} title={item.title} text={item.text} />).reverse()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, {navigator}) => {
  return {
    navigator
  }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;