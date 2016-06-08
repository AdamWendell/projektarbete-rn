import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions, PixelRatio, ScrollView} from 'react-native'
import {connect} from 'react-redux'

const pixelFixer = (pixelnum) => pixelnum * PixelRatio.get()
class Info extends React.Component {
  constructor (props) {
    super(props)
  }
	render () {
    const {data, language} = this.props
    console.log(data, language)
    return (
      <View style={{backgroundColor: 'rgb(46, 76, 102)', flex: 1}}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          contentContainerStyle={[styles.base, {marginBottom: pixelFixer(24) }]}>
          <View style={styles.container}>
            <Image style={{width: pixelFixer(75), height: pixelFixer(45),}} source={require('../img/icon.png')} resizeMode='cover' />
            <Text style={[styles.text, styles.iconText, styles.iconTextHeader]}>LANDVETTER</Text>
            <Text style={[styles.text, styles.iconText ]}>AIRPORT HOTEL</Text>
          </View>
          <View style={[styles.container, ]}>
            <Text style={[styles.text, styles.welcome, {marginBottom: pixelFixer(5), marginTop: pixelFixer(18)}]}>{data.title[language]}</Text>
            <Text style={[styles.text, ]}>{data.description[language]}</Text>
            
          </View>
        </ScrollView>
        </View>  

      )
  }
}
 

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'rgb(46, 76, 102)',
    flex: 1,
    justifyContent: 'center',
   alignItems: 'center',
  },
  container: {
    alignItems: 'center',
       justifyContent: 'center',
    width: Dimensions.get('window').width * 0.75
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  paddedBottom: {
    marginBottom: pixelFixer(4),
    fontWeight: '100'
  },
  iconText: {
    fontWeight: 'bold',
    fontFamily: 'Courier-Bold'
  },
  iconTextHeader: {
    fontSize:14 * PixelRatio.get(),
  },
  welcome: {
    fontSize: 17 * PixelRatio.get(),
    fontWeight: '200'
  }

})
function mapStateToProps({data, language}) {
  return {data, language}
}
export default connect(mapStateToProps)(Info)


// // <Text style={[styles.text, styles.paddedBottom]}>Varje år vandrar torsken från Barnets hav ner till nord-norska kusten
// //             för att leka. Efter den långa vandringen genom kalla klara vattnet och hårda strömmar,
// //             blir torsken muskulösare och får ett fastare vitare och mer delikat kött. När torksen är framme, kallas den för Skrei</Text>

// //             <Text style={[styles.text, styles.paddedBottom]}> Med glödande träkol och rökspån erbjuder vårt kök tillsammans med Josper, en 360 kilos kolgrill från Spanien, smaker utöver det vanliga </Text>

// //             <Text style={[styles.text, styles.paddedBottom]}>Våra duktiga kockar sätter en ära i att alltid bjuda på en spännande och varierad meny.</Text>

//             <Text style={[styles.text, styles.paddedBottom, ]}>Smaklig måltid!</Text>