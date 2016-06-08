import React from 'react'
import {Text, View, ListView, Dimensions} from 'react-native'
import {connect} from 'react-redux'
const {height} = Dimensions.get('window')

const formatData = (items, language) => {
  var data = {};
  items.map(i => {
    var section = i.tags.en.toLowerCase();
    i.language = language
    if (!(section in  data)) {
      data[section] = []
    }
    data[section].push(i)
  });
  return data
}


class ListWithHeaders extends React.Component {
  constructor(props) {
    super(props)
     var ds = new ListView.DataSource({
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(formatData(this.props.items, this.props.language)),
      language: this.props.language
    };
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props.language !== nextProps.language)
    if(this.props.language !== nextProps.language) {
      this.forceUpdate()
    }
    this.setState({dataSource: this.state.dataSource.cloneWithRowsAndSections( formatData(nextProps.items, this.props.language))})
  }
  renderRow (rowdata, rowId) {
    return <View style={{ marginHorizontal: height * 0.01, marginVertical: height * 0.01}}>
      <Text style={{fontWeight: 'bold'}}>{rowdata.title[rowdata.language]}</Text>
      <View style={{flex: 1, justifyContent: 'center'}}><Text>{rowdata.description[rowdata.language]}</Text></View>
      <Text>{rowdata.price.sek}:- (€{rowdata.price.eur})</Text>
    </View>
  }
  renderHeader(data, sectionId) {
    console.log(this.props.language)
    return (
      <View style={{ backgroundColor: 'rgb(46, 76, 102)', marginHorizontal: height * 0.01}}>
        <Text style={{color: 'white', paddingVertical: height * 0.01, fontWeight: 'bold'}}>{data[0].tags[this.props.language]}</Text>
      </View>
    );
  }
  render() {

    return <ListView
        ref="listView"
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        renderSectionHeader={this.renderHeader.bind(this)} />
  }
}

function mapStateToProps({language}) {
  return {language}
}



export default connect(mapStateToProps)(ListWithHeaders)
