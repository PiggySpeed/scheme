'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
import { fontSizes } from '../../styles';
import Markdown from '../markdown/markdown.js';

class PharmaCareContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    if(this.props.data){
      const { title, text, references } = this.props.data;
      return(
        <ScrollView>
          <Text style={{fontSize: fontSizes.l, padding: 10}}>{title}</Text>
          <Markdown>
            {text}
            {references.map( (item, id) => `\n${item}`)}
          </Markdown>
        </ScrollView>
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
