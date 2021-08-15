import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';
import ProductList from './ProductList';
import RegistrationComponent from '../components/RegistrationComponent';
import LoginComponent from '../components/LoginComponent';
import FirstScreen from '../components/FirstScreen';
import SplashScreenComponent from './SplashScreenComponent';

const Stack = createStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreenComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={ProductList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
