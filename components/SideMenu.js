import React from 'react'
import {Text} from 'react-native'
import Drawer from 'react-native-drawer'
import TabBar from './TabBar'
import MenuRow from './MenuRow'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {openDrawer, closeDrawer} from '../actions/drawerActions'
import {dataAction} from '../actions/dataAction'

class SideMenu extends React.Component {
  // componentDidMount () {
  //   (async () => {

  //     try {
  //       var response = await fetch('http://landvetter.inserve.io/activeMenu.json')
  //       console.log(response)
  //       var data = await response.json()
  //       console.log(data)
  //       this.props.dataAction(data)
  //     } catch (e){
  //       console.log(e)
  //     }
  //   })()
  // }

  render() {
    return (
      <Drawer
        type="static"
        content={<MenuRow />}
        open={this.props.drawer}
        onOpen={() => this.props.openDrawer()}
        onClose={() => this.props.closeDrawer()}
        openDrawerOffset={0.8}
        styles={{main: {paddingLeft: 0}, drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 6},}}
        negotiatePan={true}
        captureGestures={false}
      >
        <TabBar />
      </Drawer>    
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({openDrawer, closeDrawer, dataAction}, dispatch)
}

function mapStateToProps ({drawer}) {
  return {drawer}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)