import React, { createElement } from 'react'
import { Text } from 'react-native'

const noop = () => {};

const headerRules = (styles, onStoreRefs) => {
  return {
    heading: {
      react: (node, output, state) => {
        state.withinText = true;

        let reference = null;
        if(node.level === 2){ reference = node.content[0].content }

        return createElement(Text, {
          key: state.key,
          style: [styles.heading, styles['heading' + node.level]],
          onLayout: (e) => {if(reference){onStoreRefs(reference, e.nativeEvent.layout.y)}}
        }, output(node.content, state))
      }
    }
  }
};

export default headerRules;
