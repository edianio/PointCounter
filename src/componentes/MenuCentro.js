import React, {Component} from 'react'
import {View, Text, Image, TouchableHighlight, Dimensions} from 'react-native'

import Padrao from '../estilos/Padrao'

export default class MenuCentro extends Component{
    state = {
        dado1: 0,
        dado2: 0
    }

    render(){
        return (
            <View style={{backgroundColor: '#cc0', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableHighlight >
                    <Image style={{width:(Dimensions.get('window').width / 5),
                        height:(Dimensions.get('window').width / 8)}} source={require('../img/menu.png')} />
                </TouchableHighlight>
                <Text style={{fontSize: 30, color: '#fff'}} >{this.state.dado1}</Text>
                <Text style={[Padrao.invertido, {fontSize: 30, color: '#fff'}]} >{this.state.dado2}</Text>
                <TouchableHighlight onPress={this.rolarDado} >
                    <Image style={{width:(Dimensions.get('window').width / 8),
                        height:(Dimensions.get('window').width / 8)}} source={require('../img/d20.png')} />
                </TouchableHighlight>
            </View>
        )
    }

    rolarDado = () => {
        let max = 20
        let min = 1
        let valor = Math.floor(Math.random() * (max - min + 1)) +min
        if(this.state.dado2 > 0 && this.state.dado1 > 0){
            this.setState({dado2: 0})
            this.setState({dado1: 0})
        }else if(this.state.dado1 > 0){
            this.setState({dado2: valor})
        }else{
            this.setState({dado1: valor})
        }
    }
}