import React, {Component} from 'react'
import {View, Text, Image, TouchableHighlight} from 'react-native'

import Padrao from '../estilos/Padrao'

export default class Aember extends Component{
    state = {
        marcador: 0
    }

    incrementa = () => this.setState({marcador: this.state.marcador +1})

    decrementa = () => {
        if(this.state.marcador > 0){
            this.setState({marcador: this.state.marcador -1})
        }
    }

    zera = () => this.setState({marcador: 0})

    render(){
        return(
            <View style={[Padrao.containerBotoes, {flexDirection: 'row', width: '90%'}]}>
                <TouchableHighlight style={{borderRadius: 40}}  onPress={this.zera} >
                    <Image style={Padrao.btZerar} source={require('../img/reciclar.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={Padrao.botao}  onPress={this.incrementa} >
                    <Text style={Padrao.texto} >+</Text>
                </TouchableHighlight>
                <Text style={{fontSize: 45, color: '#fff'}}>{this.state.marcador}</Text>
                <TouchableHighlight style={Padrao.botao}  onPress={this.decrementa} >
                    <Text style={Padrao.texto} >-</Text>
                </TouchableHighlight>
                <Image style={Padrao.iconesKf} source={require('../img/aember.png')} />
            </View>
        )
    }
}