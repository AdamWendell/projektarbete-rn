import React from 'react'
import {View, Text, ToolbarAndroid} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {toggleDrawer} from '../actions/drawerActions'
import Info from './Info'
import Content from './Content'

const toolbarActions = [{title: 'Meny', show: 'always'}, {title: 'Info', show: 'always'}]
class TabBar extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      show: 'Info'
    }
  }
  render () {
    const selectedView = () => this.state.show === 'Info' ? <Info /> : <Content />
    return   <View style={{flex:1, backgroundColor: 'white'}}>
    <ToolbarAndroid title="AwesomeApp" navIcon={require('../img/menu.png')} actions={toolbarActions} style={{
        backgroundColor: '#e9eaed',
        height: 56,
      }}
      onIconClicked={() => this.props.toggleDrawer()}
      onActionSelected={(position) => this.setState({show: toolbarActions[position].title})}
   />
      {selectedView()}
    </View>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleDrawer}, dispatch)
}

function mapStateToProps ({drawer}) {
  return {drawer}
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar)