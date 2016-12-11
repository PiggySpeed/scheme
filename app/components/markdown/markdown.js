import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import SimpleMarkdown from 'simple-markdown'
import initialRules from '../markdown/rules.js'
import styles from '../markdown/styles.js'
import _ from 'lodash';

class Markdown extends Component {
  constructor(props){
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return !((this.props.children === nextProps.children) && (this.props.styles === nextProps.styles));
  }
  //parse(source){
  //  const mergedStyles = { ...styles, ...this.props.styles };
  //  const rules = { ...SimpleMarkdown.defaultRules, ...initialRules(mergedStyles), ...this.props.rules };
  //  const rawBuiltParser = SimpleMarkdown.parserFor(rules);
  //  const blockSource = source + '\n\n';
  //  return rawBuiltParser(blockSource, {inline: false});
  //}
  renderContent() {
    const child = Array.isArray(this.props.children)
      ? this.props.children.join('')
      : this.props.children;

    const mergedStyles = { ...styles, ...this.props.styles };
    const rules = _.merge({}, SimpleMarkdown.defaultRules, initialRules(mergedStyles), this.props.rules);
    const rawBuiltParser = SimpleMarkdown.parserFor(rules);
    const blockSource = child + '\n\n';

    const syntaxTree = rawBuiltParser(blockSource, {inline: false});

    console.log(syntaxTree);
    return SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'))(syntaxTree)
  };

  render() {
    return (
      <View style={[styles.view, viewStyles.container]}>
        {this.renderContent(this.props.children)}
      </View>
    )
  }
}
Markdown.propTypes = {
  styles: PropTypes.object,
  rules: PropTypes.object
};
Markdown.defaultProps = {
  styles: styles,
  rules: {}
};

const viewStyles = {
  container: {
    alignItems: 'flex-start'
  }
};

export default Markdown;