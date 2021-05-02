import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import SettingScreen from './Screens/SettingScreen';

export const AppDrawerNavigator =createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
Setting:{
    screen:SettingScreen
}
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
}
)

