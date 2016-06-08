import React from 'react'
import {View, Image, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {toggleLanguage} from '../actions/languageAction'
import {selectList} from '../actions/selectListAction'

class MenuRow extends React.Component {
	render() {
    const {data, language} = this.props
		return (
        <View style={{justifyContent: 'flex-end', alignItems: 'center', flex: 1, backgroundColor: 'whitesmoke'}}>
          <View style={{flex: 1, justifyContent:'space-between'}}>

            <TouchableOpacity onPress={() => this.props.selectList("First Course")}>
            <View style={{alignItems: 'center'}}>
              <Image style={{height: 50, width: 45, marginTop: 20}} resizeMode='contain' source={require('../img/forratt.png')}/>
              <Text> {data.categories.find(categ => categ.title.en === "First Course").title[language]} </Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.props.selectList('Main Course')}>
              <View style={{alignItems: 'center'}}>
                <Image style={{height: 50, width: 45}} resizeMode='contain' source={require('../img/varmratt.png')}/>
                <Text> {data.categories.find(categ => categ.title.en === "Main Course").title[language]} </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.props.selectList('Dessert')}>
            <View style={{alignItems: 'center'}}>
              <Image style={{height: 50, width: 45}} resizeMode='contain' source={require('../img/dessert.png')}/>
              <Text> {data.categories.find(categ => categ.title.en === "Dessert").title[language]} </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.selectList('Aperitif')}>
              <View style={{alignItems: 'center'}}>
                <Image style={{height: 50, width: 45}} resizeMode='contain' source={require('../img/aperitif.png')}/>
                <Text> {data.categories.find(categ => categ.title.en === "Aperitif").title[language]} </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.selectList('Wine')}>
              <View style={{alignItems: 'center'}}>
                <Image style={{height: 50, width: 45}} resizeMode='contain' source={require('../img/vin.png')}/>
                <Text> {data.categories.find(categ => categ.title.en === "Wine").title[language]} </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.selectList("Salad and Sandwitches")}>
              <View style={{alignItems: 'center'}}>
                <Image style={{height: 50, width: 45}} resizeMode='contain' source={require('../img/sallad.png')}/>
                <Text> {data.categories.find(categ => categ.title.en === "Salad and Sandwitches").title[language]} </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.selectList("Beer and Cider")}>
              <View style={{alignItems: 'center'}}>
                <Image style={{height: 50, width: 45}} resizeMode='contain' source={require('../img/ol_cider.png')}/>
                <Text> {data.categories.find(categ => categ.title.en === "Beer and Cider").title[language]} </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.selectList()}>
              <View style={{alignItems: 'center'}}>
                <Image style={{height: 50, width: 45}} resizeMode='contain' source={require('../img/avec.png')}/>
                <Text> {data.categories.find(categ => categ.title.en === "Avec").title[language]} </Text>
              </View>
            </TouchableOpacity>

          </View>
          <TouchableOpacity onPress={() => this.props.toggleLanguage()}>
            <View style={{alignItems: 'center'}}>
            <Image style={{height: 50, width: 45}} resizeMode='contain' source={require('../img/forratt.png')}/>
            <Text> language </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
	}
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({toggleLanguage, selectList}, dispatch)
}
function mapStateToProps({data, language}) {
  return {data, language}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuRow)
