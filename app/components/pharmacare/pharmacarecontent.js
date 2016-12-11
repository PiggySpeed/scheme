'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
import { colors, layouts } from '../../styles';
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
