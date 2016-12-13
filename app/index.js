'use strict';
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore'

import SchemeNavigator from './config/navigator';
import { View } from 'react-native';

class Scheme extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <Provider store={configureStore}>
        <View style={{flex: 1}}>
          <SchemeNavigator />
        </View>
      </Provider>
    );
  }
}
Scheme.propTypes = {
};


export default Scheme;