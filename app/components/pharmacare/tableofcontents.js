'use strict';
import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { colors } from '../../styles';

const ListItem = ({text, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{marginBottom: 10}}>
      {text}
    </Text>
  </TouchableOpacity>
);
ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

class TableOfContents extends Component {
  constructor(props){
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  onPress(ref){
    this.props.onJumpToSection(ref);
  }
  render() {
    return(
      <View style={styles.container}>
        { this.props.data.map( item =>
          <ListItem key={item.ref} text={item.text} onPress={() => this.onPress(item.ref)} />
        )}
      </View>
    );
  }
}
TableOfContents.propTypes = {
  data: PropTypes.array.isRequired,
  onJumpToSection: PropTypes.func.isRequired
};

const styles = {
  container: {
    borderWidth: 0.5,
    borderColor: colors.grey,
    margin: 10,
    marginBottom: 25,
    padding: 10
  }
};

export default TableOfContents;