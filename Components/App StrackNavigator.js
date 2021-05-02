import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import SettingScreen from './Screens/SettingScreen';



export const AppStackNavigator = createStackNavigator({
    BookDonateList : {
      screen : ExchangeScreen,
      navigationOptions:{
        headerShown : false
      }
    },
    RecieverDetails : {
      screen : RecieverDetailsScreen,
      navigationOptions:{
        headerShown : false
      }
    },
  
  },
    {
      initialRouteName: 'DonateList'
    }
  );




