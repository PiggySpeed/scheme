'use strict';
import React, { Component, PropTypes } from 'react';
import SchemeNavigator from './config/navigator';
import PreSplash from './components/presplash';
import { View, Text } from 'react-native';

class Scheme extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        { this.props.isAuthenticating
          ? <PreSplash />
          : <SchemeNavigator />
        }
      </View>
    );
  }
}
Scheme.propTypes = {
  isAuthenticating: PropTypes.bool
};
Scheme.defaultProps = {
  isAuthenticating: true
};


export default Scheme;