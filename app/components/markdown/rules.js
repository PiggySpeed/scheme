import React, { createElement } from 'react'
import { Image, Text, View, Linking } from 'react-native'

const noop = () => {};

const initialRules = (styles) => {
  return {
    autolink: {
      //order: 1,
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
      //order: 2,
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.blockQuote
        }, output(node.content, state))
      }
    },
    br: {
      //order: 3,
      react: (node, output, state) => {
        return createElement(Text, {
          key: state.key,
          style: styles.br
        }, '\n\n')
      }
    },
    codeBlock: {
      //order: 4,
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.codeBlock
        }, null)
      }
    },
    del: {
      //order: 5,
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.del
        }, output(node.content, state))
      }
    },
    em: {
      //order: 6,
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.em
        }, output(node.content, state))
      }
    },
    heading: {
      //order: 7,
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: [styles.heading, styles['heading' + node.level]]
        }, output(node.content, state))
      }
    },
    hr: {
      //order: 8,
      react: (node, output, state) => {
        return createElement(View, { key: state.key, style: styles.hr })
      }
    },
    image: {
      //order: 9,
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
      //order: 10,
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.inlineCode
        }, output(node.content, state))
      }
    },
    link: {
      //order: 11,
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
      //order: 12,
      react: (node, output, state) => {
        const items = node.items.map( (item, i) => {
          let bullet;
          if (node.ordered) {
            bullet = createElement(Text, { key: state.key, style: styles.listItemNumber  }, (i + 1) + '. ')
          }
          else {
            bullet = createElement(Text, { key: state.key, style: styles.listItemBullet }, styles.listItemBulletType ? `${styles.listItemBulletType} ` : '\u2022 ')
          }
          const listItemText = createElement(Text, { key: state.key + 1, style: styles.listItemText }, output(item, state));
          return createElement(View, {
            key: i,
            style: styles.listItem
          }, [bullet, listItemText])
        });
        return createElement(View, { key: state.key, style: styles.list }, items)
      }
    },
    newline: {
      //order: 13,
      react: (node, output, state) => {
        return createElement(Text, {
          key: state.key,
          style: styles.newline
        }, '\n')
      }
    },
    paragraph: {
      //order: 14,
      react: (node, output, state) => {
        return createElement(Text, {
          key: state.key,
          style: styles.paragraph
        }, output(node.content, state))
      }
    },
    strong: {
      //order: 5,
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(Text, {
          key: state.key,
          style: styles.strong
        }, output(node.content, state))
      }
    },
    table: {
      //order: 16,
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
      //order: 17,
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
      //order: 18,
      react: (node, output, state) => {
        state.withinText = true;
        return createElement(View, {
          key: state.key,
          style: styles.u
        }, output(node.content, state))
      }
    },
    url: {
      //order: 19,
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
