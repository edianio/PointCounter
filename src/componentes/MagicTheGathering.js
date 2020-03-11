import React, {Component} from 'react'
import {View, Text, TouchableHighlight, Image, Dimensions} from 'react-native'

import classes from '../estilos'

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
                    <Image style={[classes.imageBackground, this.props.invertido ? [classes.inverted, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/planeswalker.png')} />
                )
            case 1:
                return (
                    <Image style={[classes.imageBackground, this.props.invertido ? [classes.inverted, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/preto.png')} />
                )
            case 2:
                return (
                    <Image style={[classes.imageBackground, this.props.invertido ? [classes.inverted, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/azul.png')} />
                )
            case 3:
                return (
                    <Image style={[classes.imageBackground, this.props.invertido ? [classes.inverted, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/branco.png')} />
                )
            case 4:
                return (
                    <Image style={[classes.imageBackground, this.props.invertido ? [classes.inverted, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/verde.png')} />
                )
            case 5:
                return (
                    <Image style={[classes.imageBackground, this.props.invertido ? [classes.inverted, {alignSelf: 'flex-start'}] : null ]}
                        source={require('../img/vermelho.png')} />
                )
        }
    }

    render(){
        return(
            <View style={classes.container}>
                <View style={[classes.containerPlayer, {backgroundColor: this.state.cor}]}>
                    <this.ImagemFundo/>
                    <TouchableHighlight style={classes.button}  onPress={this.incrementa} >
                        <Text style={classes.text} >+</Text>
                    </TouchableHighlight>
                    <Text style={[{fontSize: 70}, this.props.invertido ? classes.inverted : null]} >{this.state.pontos}</Text>
                    <TouchableHighlight style={classes.button} onPress={this.decrementa} >
                        <Text style={classes.text}>-</Text>
                    </TouchableHighlight>
                    <View style={[classes.containerButtons, this.props.invertido ? {flexDirection: 'column-reverse'} : null]}>
                        <TouchableHighlight onPress={this.zerarContador} >
                            <Image style={{width:(Dimensions.get('window').width / 9),
                                height:(Dimensions.get('window').width / 9), marginBottom: 10, marginTop: 10}}
                                source={require('../img/reciclar.png')} />
                        </TouchableHighlight>
                        <TouchableHighlight style={[classes.btColor, classes.black]} onPress={() => this.setState({cor: '#8b7b8b', logo: 1})}>
                            <Text></Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[classes.btColor, classes.blue]} onPress={() => this.setState({cor: '#87ceff', logo: 2})}>
                            <Text></Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[classes.btColor, classes.white]} onPress={() => this.setState({cor: '#f7ee63', logo: 3})}>
                            <Text></Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[classes.btColor, classes.green]} onPress={() => this.setState({cor: '#98fb98', logo: 4})}>
                            <Text></Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={[classes.btColor, classes.red]} onPress={() => this.setState({cor: '#ff6347', logo: 5})}>
                            <Text></Text>
                        </TouchableHighlight>
                    </View>
                </View >
            </View>
        )
    }
}