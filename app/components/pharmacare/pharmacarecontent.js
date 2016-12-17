'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Text } from 'react-native';
import { fontSizes } from '../../styles';
import { Markdown } from '../';
import TableOfContents from './tableofcontents';

const MOCK = [
  { ref: '1', text: 'What is BC PharmaCare?' },
  { ref: '2', text: 'When is a person considered a B.C. resident for PharmaCare purposes?' },
  { ref: '3', text: 'Are B.C. residents covered for travel supplies?' },
  { ref: '4', text: 'Out-of-Province Coverage' },
  { ref: '5', text: 'Who is responsible for BC PharmaCare?' },
  { ref: '6', text: 'How does PharmaCare work?' },
  { ref: '7', text: 'Which drugs and medical supplies does PharmaCare cover?' },
  { ref: '8', text: 'Are there limits on what PharmaCare will cover?' },
  { ref: '9', text: 'How are claims processed?' },
  { ref: '10', text: 'Is BC PharmaCare part of the Medical Services Plan?' },
  { ref: '11', text: 'Other insurers' }
];

class PharmaCareContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdownY: 0,
      headersList: []
    };
    this.onJumpToSection = this.onJumpToSection.bind(this);
    this.onStoreRefs = this.onStoreRefs.bind(this);
    this.onSetMarkdownY = this.onSetMarkdownY.bind(this);
  }
  onJumpToSection(key){
    console.log('jumping to section with y Pos ', this.state.headersList[key].y);
  }
  onStoreRefs(key, y){
    const list = this.state.headersList;
    const newY = y + this.state.markdownY;
    const newKey = MOCK.find( item => item.text === key);
    if(newKey >= 0){
      list.push({key: newKey.text, y: newY });
      this.setState({ headersList: list });
    }
  }
  onSetMarkdownY(e){
    const y = e.nativeEvent.layout.y;
    this.setState({ markdownY: y })
  }
  render() {
    if(this.props.data){
      const { title, text, references } = this.props.data;
      return(
        <ScrollView>
          <Text style={{fontSize: fontSizes.l, padding: 10}}>{title}</Text>
          <TableOfContents data={MOCK} onJumpToSection={this.onJumpToSection} />
          <Markdown onLayout={this.onSetMarkdownY} onStoreRefs={this.onStoreRefs}>
            {text}
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
