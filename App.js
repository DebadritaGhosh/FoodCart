import 'react-native-gesture-handler';
/* eslint-disable react-native/no-inline-styles */
//import 'react-native-gesture-handler';
import React, {Component} from 'react';
//import {NavigationContainer} from '@react-navigation/native';
//import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegistrationComponent from './components/RegistrationComponent';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import SplashScreenComponent from './Screens/SplashScreenComponent';
import FirstScreen from './components/FirstScreen';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductComponent from './components/ProductComponent';
import NavigationScreen from './Screens/NavigationScreen';
import ProductList from './Screens/ProductList';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <NavigationScreen />
      </View>
    );
  }
}
