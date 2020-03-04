import React, {Component} from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import {createDrawerNavigator} from 'react-navigation'

import MtgScreen from './src/screens/Mtg'
import KeyforgeScreen from './src/screens/Kf'

export default createDrawerNavigator({
  MtgScreen: {
    screen: MtgScreen,
    navigationOptions: {title: "Magic the Gathering"}
  },
  KeyforgeScreen: {
    screen: KeyforgeScreen,
    navigationOptions: {title: "Keyforge"}
  }
}, {drawerWidth: 300, drawerPosition: 'left', drawerBackgroundColor: '#cc0'})