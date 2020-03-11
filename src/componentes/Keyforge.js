import React, { Component } from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

import classes from '../estilos'
import Correntes from './Correntes'
import Aember from './Aember'
import Chave from './Chave'

export default class Keyforge extends Component {
    state = {
        nome: ''
    }

    render(){
        return(
            <View style={[classes.container, {backgroundColor: '#ff9900'}, this.props.invertido ? [classes.inverted, {alignSelf: 'flex-start'}] : null]}>
                <View style={[classes.containerPlayer, {flexDirection: 'column'}]}>
                    <Chave />
                    <Aember />
                    <Correntes />
                </View>
            </View>
        )
    }
}