import React, {Component} from 'react'
import {View, Text, TouchableHighlight, Image} from 'react-native'

import classes from '../estilos'

export default class Chave extends Component{
    state = {
        marcador1: 0,
        marcador2: 0,
        marcador3: 0
    }

    viraChave1 = () => {
        if(this.state.marcador1 === 0){
            this.setState({marcador1: 1})
        }else{
            this.setState({marcador1: 0})
        }
    }

    viraChave2 = () => {
        if(this.state.marcador2 === 0){
            this.setState({marcador2: 1})
        }else{
            this.setState({marcador2: 0})
        }
    }

    viraChave3 = () => {
        if(this.state.marcador3 === 0){
            this.setState({marcador3: 1})
        }else{
            this.setState({marcador3: 0})
        }
    }

    chave1 = () => {
        if(this.state.marcador1 === 0){
            return <Image style={classes.iconsKf} source={require('../img/key1d.png')} />
        }else{
            return <Image style={classes.iconsKf} source={require('../img/key1.png')} />
        }
    }

    chave2 = () => {
        if(this.state.marcador2 === 0){
            return <Image style={classes.iconsKf} source={require('../img/key2d.png')} />
        }else{
            return <Image style={classes.iconsKf} source={require('../img/key2.png')} />
        }
    }

    chave3 = () => {
        if(this.state.marcador3 === 0){
            return <Image style={classes.iconsKf} source={require('../img/key3d.png')} />
        }else{
            return <Image style={classes.iconsKf} source={require('../img/key3.png')} />
        }
    }

    render(){
        return(
            <View style={[classes.containerButtons, {flexDirection: 'row', width: '95%'}]}>
                <TouchableHighlight style={{borderRadius: 50}} onPress={this.viraChave1} >
                    <this.chave1 />
                </TouchableHighlight>
                <TouchableHighlight style={{borderRadius: 50}} onPress={this.viraChave2} >
                    <this.chave2 />
                </TouchableHighlight>
                <TouchableHighlight style={{borderRadius: 50}} onPress={this.viraChave3} >
                    <this.chave3 />
                </TouchableHighlight>
            </View>
        )
    }
}