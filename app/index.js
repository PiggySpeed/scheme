'use strict';
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore'

import SchemeNavigator from './config/navigator';
import { PreSplash } from './components';
import { View, Text } from 'react-native';

class Scheme extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewSplash: true
    };
    this.onViewSplash = this.onViewSplash.bind(this);
    this.onCloseSplash = this.onCloseSplash.bind(this);
  }
  onViewSplash(){
    this.setState({ viewSplash: true })
  }
  onCloseSplash(){
    this.setState({ viewSplash: false })
  }
  render() {
    return(
      <Provider store={configureStore}>
        <View style={{flex: 1}}>
          { this.state.viewSplash
            ? <PreSplash handleClick={this.onCloseSplash} />
            : <SchemeNavigator handleClick={this.onViewSplash} />
          }
        </View>
      </Provider>
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