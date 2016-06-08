import {combineReducers} from 'redux'
import drawer from './drawer'
import data from './data'
import language from './language'
import selectedList from './selectedList'

export default combineReducers({
	drawer,
	data,
	language,
	selectedList
})