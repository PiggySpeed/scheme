import React, { Component, createElement } from 'react'
import { Image, Text, View, Linking } from 'react-native'
import {styles} from './styles';

class ListText extends Component {
  shouldComponentUpdate(nextProps){
    return nextProps.listLevel !== this.props.listLevel
  }
  render() {
    var margin = 5*this.props.listLevel;
    console.log(margin);
    return (
      <Text style={{marginLeft: margin}}>
        {this.props.children} {margin}
      </Text>
    )
  }
}


const noop = () => {};
const generateId = (id) => {
  var count = id;
  return () => {
    //console.log('madekey');
    return id++
  }
};
const getId = generateId(400);

const initialRules = (styles) => {
  return {
    autolink: {
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.link,
          onPress: noop
        }, output(node.content, state))
      }
    },
    blockQuote: {
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.blockQuote
        }, output(node.content, state))
      }
    },
    br: {
      react: (node, output, state) => {
        return createElement(Text, {
          key: state.key,
          style: styles.br
        }, '\n\n')
      }
    },
    codeBlock: {
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.codeBlock
        }, null)
      }
    },
    del: {
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.del
        }, output(node.content, state))
      }
    },
    em: {
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.em
        }, output(node.content, state))
      }
    },
    heading: {
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: [styles.heading, styles['heading' + node.level]],
        }, output(node.content, state))
      }
    },
    hr: {
      react: (node, output, state) => {
        return createElement(View, { key: state.key, style: styles.hr })
      }
    },
    image: {
      react: (node, output, state) => {
        return createElement(Image, {
          key: state.key,
          resizeMode: styles.resizeMode ? styles.resizeMode : 'contain',
          source: { uri: node.target },
          style: node.target.match(/youtu|vimeo/) ? styles.video : styles.image
        })
      }
    },
    inlineCode: {
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.inlineCode
        }, output(node.content, state))
      }
    },
    link: {
      react: (node, output, state) => {
        state.withinText = true;
        const openUrl = (url) => {
          Linking.openURL(url).catch(error => console.warn('An error occurred: ', error))
        };
        return createElement(Text, {
          style: node.target.match(/@/) ? styles.mailTo : styles.link,
          key: state.key,
          onPress: () => openUrl(node.target)
        }, output(node.content, state))
      }
    },
    list: {
      indentLevel: 0,
      parse: function(capture, parse, state) {
        //var firstSpace = capture[0].match(/^ *(?:-)/)[0].length;
        //var firstSpaceRegex = new RegExp("(^ {1," + (firstSpace) + "})", "gm");
        //var newCapture = capture[0].replace(firstSpaceRegex, '');
        //console.log(newCapture);
        //console.log('state level is ', this.trees, state.inline);
        ++this.indentLevel;
        var indentLevel = this.indentLevel;

        var bullet = capture[2];
        var ordered = bullet.length > 1;
        var start = ordered ? +bullet : undefined;
        var LIST_BULLET = "(?:[*+-]|\\d+\\.)";
        var LIST_ITEM_PREFIX = "( *)(" + LIST_BULLET + ") +";
        var LIST_ITEM_PREFIX_R = new RegExp("^" + LIST_ITEM_PREFIX); // /^( *)((?:[*+-]|\d+\.)) +/

        var LIST_ITEM_R = new RegExp(
          LIST_ITEM_PREFIX +
          "[^\\n]*(?:\\n" +
          "(?!\\1" + LIST_BULLET + " )[^\\n]*)*(\n|$)",
          "gm"
        ); // /( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm



        var BLOCK_END_R = /\n{2,}$/;
        var LIST_BLOCK_END_R = BLOCK_END_R;
        var LIST_ITEM_END_R = / *\n+$/;
        var items = capture[0]
          .replace(LIST_BLOCK_END_R, "\n\n")
          //.replace(firstSpaceRegex, '')
          .match(LIST_ITEM_R);

        //var newspace = LIST_ITEM_PREFIX_R.exec(capture[0])[0];
        //console.log(newspace);


        //var firstSpaceRegex = new RegExp("(^ {1," + (firstSpace-1) + "})");
        //var newContent = newCapture[0]
        //  .match(LIST_ITEM_R);
        //console.log(newContent);

        //console.log(items);
        //var spc = capture[0].match(/(^ +)/)[0].length;
        //var reg = new RegExp(`^ {${spc}}- .*`, 'gm');
        //console.log('spc is ', spc, 'reg is ', reg);
        //var items2 = capture[0]
        //  .replace(LIST_BLOCK_END_R, "\n\n")
        //  .match(reg);

        var lastItemWasAParagraph = false;
        // Take the current list hierarchy and parse over each item
        var itemContent = items.map(function(item, i) {
          //console.log(item);

          // We need to see how far indented this item is:
          var space = LIST_ITEM_PREFIX_R.exec(item)[0].length;
          // And then we construct a regex to "unindent" the subsequent
          // lines of the items by that amount:
          var spaceRegex = new RegExp("(^ {1," + (space-1) + "})", "gm");

          // Before processing the item, we need a couple things
          var content = item
          // remove indents on trailing lines:
            .replace(spaceRegex, '')
            // remove the bullet:
            .replace(LIST_ITEM_PREFIX_R, '');

          // Handling "loose" lists, like:
          //
          //  * this is wrapped in a paragraph
          //
          //  * as is this
          //
          //  * as is this
          var isLastItem = (i === items.length - 1);
          var containsBlocks = content.indexOf("\n\n") !== -1;

          // Any element in a list is a block if it contains multiple
          // newlines. The last element in the list can also be a block
          // if the previous item in the list was a block (this is
          // because non-last items in the list can end with \n\n, but
          // the last item can't, so we just "inherit" this property
          // from our previous element).
          var thisItemIsAParagraph = containsBlocks || (isLastItem && lastItemWasAParagraph);
          lastItemWasAParagraph = thisItemIsAParagraph;

          // backup our state for restoration afterwards. We're going to
          // want to set state._list to true, and state.inline depending
          // on our list's looseness.
          var oldStateInline = state.inline;
          var oldStateList = state._list;
          state._list = true;


          // Parse inline if we're in a tight list, or block if we're in
          // a loose list.
          var adjustedContent;
          if (thisItemIsAParagraph) {
            state.inline = false;
            adjustedContent = content.replace(LIST_ITEM_END_R, "\n\n");
          } else {
            state.inline = true;
            adjustedContent = content.replace(LIST_ITEM_END_R, "\n"); // <<<<<<< Also needed to add \n to this
          }

          var result = parse(adjustedContent, state);

          // Restore our state before returning
          state.inline = oldStateInline;
          state._list = oldStateList;
          return result;
        });
        this.indentLevel--;
        return {
          ordered: ordered,
          start: start,
          items: { // <<<<<<<< Split this into an object so we can pass data to renderer
            itemContent: itemContent,
            level: indentLevel}
        };
      },
      react: (node, output, state) => {
        const items = node.items.itemContent.map( (item, i) => {
          let bullet;
          if (node.ordered) {
            bullet = createElement(Text, { key: state.key, style: styles.listItemNumber  }, (i + 1) + '. ')
          }
          else {
            var bulletLevel = (node.items.level/1) - 1;
            var bull = bulletLevel === 0 ? 0 : bulletLevel * 2;
            var indents = '  '.repeat(bull);
            var bulletChar = styles.listItemBulletType
              ? indents + `${styles.listItemBulletType(bulletLevel)} `
              : indents + '\u2022 ';

            bullet = createElement(Text, {
              key: state.key, style: styles.listItemBullet
            }, bulletChar)
          }
          const listItemText = createElement(Text, { key: getId() }, output(item, state));
          return createElement(Text, {
            key: getId()
          }, [bullet, listItemText]);
        });

        return createElement(Text, { key: getId() }, items);
      }
    },
    newline: {
      react: (node, output, state) => {
        return createElement(Text, {
          key: state.key,
          style: styles.newline
        }, '\n')
      }
    },
    paragraph: {
      react: (node, output, state) => {
        return createElement(Text, {
          key: state.key,
          style: styles.paragraph
        }, output(node.content, state))
      }
    },
    strong: {
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.strong
        }, output(node.content, state))
      }
    },
    table: {
      react: (node, output, state) => {
        const headers = node.header.map( (content) => {
          return createElement(Text, {
            style: styles.tableHeaderCell
          }, output(content, state))
        });

        const header = createElement(View, { style: styles.tableHeader }, headers);

        const rows = node.cells.map((row, r) => {
          const cells = row.map((content, c) => {
            return createElement(View, {
              key: c,
              style: styles.tableRowCell
            }, output(content, state))
          });
          const rowStyles = [styles.tableRow];
          node.cells.length - 1 == r ? rowStyles.push(styles.tableRowLast) : null;
          return createElement(View, { key: r, style: rowStyles }, cells)
        });

        return createElement(View, { key: state.key, style: styles.table }, [ header, rows ])
      }
    },
    text: {
      react: (node, output, state) => {
        // Breaking words up in order to allow for text reflowing in flexbox
        let words = node.content.split(' ');
        words = words.map( (word, i) => {
          const elements = [];
          i != words.length - 1 ? word = word + ' ' : null;
          const textStyles = [styles.text];
          !state.withinText ? textStyles.push(styles.plainText) : null;
          return createElement(Text, {
            style: textStyles
          }, word)
        });
        return words
      }
    },
    u: {
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(View, {
          key: state.key,
          style: styles.u
        }, output(node.content, state))
      }
    },
    url: {
      react: (node, output, state) => {
        state.withinText = true;
        const openUrl = (url) => {
          Linking.openURL(url).catch(error => console.warn('An error occurred: ', error))
        };
        return createElement(Text, {
          key: state.key,
          style: styles.url,
          onPress: openURL(node.target)
        }, output(node.content, state))
      }
    }
  }
};

export default initialRules;
