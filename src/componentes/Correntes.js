import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, Dimensions } from 'react-native'
import Padrao from '../estilos/Padrao'

export default class Correntes extends Component {
    state = {
        marcador: 0
    }

    incrementa = () => {
        this.setState({marcador: this.state.marcador +1})
        this.mudaCorrentes()
    }

    decrementa = () => {
        if(this.state.marcador > 0){
            this.setState({marcador: this.state.marcador -1})
        }
        this.mudaCorrentes()
    }

    zera = () => this.setState({marcador: 0})

    mudaCorrentes = () => {
        if(this.state.marcador > 0 && this.state.marcador <= 6){
            return <Image style={Padrao.iconesKf} source={require('../img/corrente1.png')} />
        }else if(this.state.marcador > 6 && this.state.marcador <= 12){
            return <Image style={Padrao.iconesKf} source={require('../img/corrente2.png')} />
        }else if(this.state.marcador > 12 && this.state.marcador <= 18){
            return <Image style={Padrao.iconesKf} source={require('../img/corrente3.png')} />
        }else if(this.state.marcador > 18){
            return <Image style={Padrao.iconesKf} source={require('../img/corrente4.png')} />
        }else{
            return <Image style={Padrao.iconesKf} source={require('../img/corrente.png')} />
        }
    }

    render(){
        return(
            <View>
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
                        <this.mudaCorrentes />
                    </View>
            </View>
        )
    }
}