import React, { Component } from 'react'
import {View} from 'react-native'
import Keyforge from '../componentes/Keyforge'
import MenuCentro from '../componentes/MenuCentro'

import KeepAwake from 'react-native-keep-awake'

export default class KeyforgeScreen extends Component {
    
    render(){
        KeepAwake.activate()
        return(
            <View>
                <Keyforge invertido/>
                <MenuCentro />
                <Keyforge />
            </View>
        )
    }
}