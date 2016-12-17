export const styles = {
  view: {},
  codeBlock: {
    fontFamily: 'Courier',
    fontWeight: '500'
  },
  del: {
    containerBackgroundColor: '#222222'
  },
  em: {
    fontStyle: 'italic'
  },
  heading: {
    fontWeight: '200'
  },
  heading1: {
    fontSize: 32
  },
  heading2: {
    fontSize: 24
  },
  heading3: {
    fontSize: 18
  },
  heading4: {
    fontSize: 16
  },
  heading5: {
    fontSize: 13
  },
  heading6: {
    fontSize: 11
  },
  hr: {
    backgroundColor: '#cccccc',
    height: 1
  },
  image: {
    width: 320,
    height: 320
  },
  inlineCode: {
    backgroundColor: '#eeeeee',
    borderColor: '#dddddd',
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: 'Courier',
    fontWeight: 'bold'
  },
  link: {
    textDecorationLine: 'underline'
  },
  list: (level) => {
    return {
      paddingLeft: 5*level,
      backgroundColor: '#c1c1c1',
      flexDirection: 'row'
    }
  },
  listItem: {
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  listItemBullet:  {
    fontSize: 20,
    lineHeight: 20,
    marginTop: 6,
    marginLeft: 5
  },
  listItemBulletType: (level) => {
    if(level > 2){
      return '\u2043'
    }
    //console.log('level is ', level);
    return {
      [0]: '\u2022',
      [1]: '\u25E6',
      [2]: '\u2023'
    }[level]
  },
  listItemNumber: {
    fontWeight: 'bold'
  },
  mailTo: {
    textDecorationLine: 'underline'
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  listItemText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#222222'
  },
  strong: {
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#222222',
    borderRadius: 3
  },
  tableHeader: {
    backgroundColor: '#222222',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tableHeaderCell: {
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 5
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#222222',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tableRowLast: {
    borderColor: 'transparent'
  },
  tableRowCell: {
    padding: 5
  },
  text: {
    color: '#222222'
  },
  u: {
    borderColor: '#222222',
    borderBottomWidth: 1
  },
  video: {
    width: 300,
    height: 300
  }
};

export default styles
