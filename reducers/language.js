var deviceLocale = require('react-native').NativeModules.RNI18n.locale
console.log(deviceLocale)
var initialState = deviceLocale.replace(/_/, '-') === 'sv-SE' ? 'se' : 'en'

export default function dataReducer (state = initialState, action = {}) {
	console.log(action.type)
  switch (action.type){
    case 'TOGGLE_LANGUAGE':


      return state !== 'se' ? 'se' : 'en'

    default: 
      return state
  }
}