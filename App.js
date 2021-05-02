import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import SignupLoginScreen from './Screens/SignupLoginScreen';
import ExchangeScreen from './Screens/HomeScreen';
import { HomeScreen } from './Screens/HomeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

import CustomSideBarMenu from './Components/CustomSideBarMenu';



export default function App() {
  return (
    <SignupLoginScreen/>
    
  );
}


const switchNavigator = createSwitchNavigator({
  SignupLoginScreen:{Screens: SignupLoginScreen},
Drawer:{Screens:AppDrawerNavigator},
})


const AppContainer =  createAppContainer(switchNavigator);