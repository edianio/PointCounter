import React, {Component} from 'react'
import {View, Text, TouchableHighlight, Image, Dimensions} from 'react-native'
import Padrao from '../estilos/Padrao'

export default class Mtg extends Component{
    state = {
        nome: this.props.nome,
        pontos: this.props.pontos,
        cor: this.props.cor,
        logo: this.props.logo
    }

    incrementa = () => this.setState({pontos: this.state.pontos+1})

    decrementa  = () => this.setState({pontos: this.state.pontos-1})

    zerarContador = () => {
        this.setState({pontos: 20})
    }

    ImagemFundo = () => {
        switch(this.state.logo){
            case 0:
                return (
                    <Image style={[Padrao.imagemFundo, this.props.invertido ? [Padrao.invertido, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/planeswalker.png')} />
                )
            case 1:
                return (
                    <Image style={[Padrao.imagemFundo, this.props.invertido ? [Padrao.invertido, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/preto.png')} />
                )
            case 2:
                return (
                    <Image style={[Padrao.imagemFundo, this.props.invertido ? [Padrao.invertido, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/azul.png')} />
                )
            case 3:
                return (
                    <Image style={[Padrao.imagemFundo, this.props.invertido ? [Padrao.invertido, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/branco.png')} />
                )
            case 4:
                return (
                    <Image style={[Padrao.imagemFundo, this.props.invertido ? [Padrao.invertido, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/verde.png')} />
                )
            case 5:
                return (
                    <Image style={[Padrao.imagemFundo, this.props.invertido ? [Padrao.invertido, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/vermelho.png')} />
                )
        }
    }

    render(){
        return(
            <View style={Padrao.container}>
                <View style={[Padrao.containerJogador, {backgroundColor: this.state.cor}]}>
                    <this.ImagemFundo/>
                    <TouchableHighlight style={Padrao.botao}  onPress={this.incrementa} >
                        <Text style={Padrao.texto} >+</Text>
                    </TouchableHighlight>
                    <Text style={[{fontSize: 70}, this.props.invertido ? Padrao.invertido : null]} >{this.state.pontos}</Text>
                    <TouchableHighlight style={Padrao.botao} onPress={this.decrementa} >
                        <Text style={Padrao.texto}>-</Text>
                    </TouchableHighlight>
                    <View style={[Padrao.containerBotoes, this.props.invertido ? {flexDirection: 'column-reverse'} : null]}>
                        <TouchableHighlight onPress={this.zerarContador} >
                            <Image style={{width:(Dimensions.get('window').width / 9),
                                height:(Dimensions.get('window').width / 9), marginBottom: 10, marginTop: 10}}
                                source={require('../img/reciclar.png')} />
                        </TouchableHighlight>
                        <TouchableHighlight style={[Padrao.btCor, Padrao.preto]} onPress={() => this.setState({cor: '#8b7b8b', logo: 1})}>
                            <Text></Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[Padrao.btCor, Padrao.azul]} onPress={() => this.setState({cor: '#87ceff', logo: 2})}>
                            <Text></Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[Padrao.btCor, Padrao.branco]} onPress={() => this.setState({cor: '#f7ee63', logo: 3})}>
                            <Text></Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[Padrao.btCor, Padrao.verde]} onPress={() => this.setState({cor: '#98fb98', logo: 4})}>
                            <Text></Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[Padrao.btCor, Padrao.vermelho]} onPress={() => this.setState({cor: '#ff6347', logo: 5})}>
                            <Text></Text>
                        </TouchableHighlight>
                    </View>
                </View >
            </View>
        )
    }
}