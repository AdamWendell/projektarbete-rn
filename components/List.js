import React from 'react'
import {ListView, View, Text, Dimensions} from 'react-native'
import {connect} from 'react-redux'

const {height} = Dimensions.get('window')

class List extends React.Component {
	constructor (props) {
		super(props)
		var ds = new ListView.DataSource({
		    rowHasChanged: (r1, r2) => true
	    });

	    this.state = {
  			dataSource: ds.cloneWithRows(this.props.items)
	    };
	}

  componentWillReceiveProps (nextProps) {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.items)})
  }

  renderRow (rowdata, rowId) {
    console.log(this.props.language)
    return <View style={{ marginHorizontal: height * 0.01, marginVertical: height * 0.01}}>
      <Text style={{fontWeight: 'bold'}}>{rowdata.title[this.props.language]}</Text>
      <View style={{flex: 1, justifyContent: 'center'}}><Text>{rowdata.description[this.props.language]}</Text></View>
      <Text>{rowdata.price.sek}:- (€{rowdata.price.eur})</Text>
    </View>
  }

	render() {

		return <ListView
        ref="listView"
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
	}
}

function mapStateToProps({language}) {
  return {language}
}



export default connect(mapStateToProps)(List)