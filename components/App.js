import React from 'react'
import {AsyncStorage} from 'react-native'
import SideMenu from './SideMenu'
import {Provider} from 'react-redux'
import {createStore, compose} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducers from '../reducers'


const store = compose(autoRehydrate())(createStore)(reducers)

persistStore(store, {storage: AsyncStorage}).purgeAll()


class App extends React.Component {

	render () {
		return (
			<Provider store={store}>

				<SideMenu />
			</Provider>
		)
	}
}


export default App