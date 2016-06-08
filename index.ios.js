/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,

} from 'react-native';
import App from './components/App'

class test extends Component {

  render() {
    return (
      
        <App />
 
    );
  }
}


AppRegistry.registerComponent('test', () => test);
