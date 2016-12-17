import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import SimpleMarkdown from 'simple-markdown'
import initialRules from '../markdown/rules.js'
import headerRules from '../markdown/headerrules.js'
import styles from '../markdown/styles.js'
import _ from 'lodash';

//var blockRegex = function(regex) {
//  var match = function(source, state) {
//    if (state.inline) {
//      return null;
//    } else {
//      return regex.exec(source);
//    }
//  };
//  match.regex = regex;
//  return match;
//};

class Markdown extends Component {
  constructor(props){
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return !((this.props.children === nextProps.children) && (this.props.styles === nextProps.styles));
  }
  renderContent() {
    const child = Array.isArray(this.props.children)
      ? this.props.children.join('')
      : this.props.children;

    const mergedStyles = { ...styles }; // this.props.styles
    const rules = _.merge({}, SimpleMarkdown.defaultRules, initialRules(mergedStyles), headerRules(mergedStyles, this.props.onStoreRefs), this.props.rules);
    const rawBuiltParser = SimpleMarkdown.parserFor(rules);
    const blockSource = child + '\n\n';
    const syntaxTree = rawBuiltParser(blockSource, {inline: false});

    return SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'))(syntaxTree)
  };

  render() {
    return (
      <View style={[styles.view, viewStyles.container]} onLayout={this.props.onLayout}>
        {this.renderContent(this.props.children)}
      </View>
    )
  }
}
Markdown.propTypes = {
  styles: PropTypes.object,
  rules: PropTypes.object,
  onStoreRefs: PropTypes.func,
  onLayout: PropTypes.func
};
Markdown.defaultProps = {
  styles: styles,
  rules: {}
};

const viewStyles = {
  container: {
    alignItems: 'flex-start',
    padding: 10
  }
};

export default Markdown;