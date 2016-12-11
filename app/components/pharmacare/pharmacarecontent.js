'use strict';
import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { colors, layouts } from '../../styles';
import Markdown from 'react-native-simple-markdown';

class PharmaCareContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    if(this.props.data){
      const { title, text, references } = this.props.data;
      return(
        <View style={layouts.container}>
          <Markdown>
            {title}
            {text}
            {references.map( (item, id) => `\n${item}`)}
          </Markdown>
        </View>
      );
    } else {
      return <Text>Loading Content...</Text>
    }
  }
}
PharmaCareContent.propTypes = {
  data: PropTypes.object
};

export default PharmaCareContent;