import React, { Component } from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

import Padrao from '../estilos/Padrao'
import Correntes from './Correntes'
import Aember from './Aember'
import Chave from './Chave'

export default class Keyforge extends Component {
    state = {
        nome: ''
    }

    render(){
        return(
            <View style={[Padrao.container, {backgroundColor: '#ff9900'}, this.props.invertido ? [Padrao.invertido, {alignSelf: 'flex-start'}] : null]}>
                <View style={[Padrao.containerJogador, {flexDirection: 'column'}]}>
                    <Chave />
                    <Aember />
                    <Correntes />
                </View>
            </View>
        )
    }
}