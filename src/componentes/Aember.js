import React, {Component} from 'react'
import {View, Text, Image, TouchableHighlight} from 'react-native'

import classes from '../estilos'

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
            <View style={[classes.containerButtons, {flexDirection: 'row', width: '90%'}]}>
                <TouchableHighlight style={{borderRadius: 40}}  onPress={this.zera} >
                    <Image style={classes.btZero} source={require('../img/reciclar.png')} />
                </TouchableHighlight>
                <TouchableHighlight style={classes.button}  onPress={this.incrementa} >
                    <Text style={classes.text} >+</Text>
                </TouchableHighlight>
                <Text style={{fontSize: 45, color: '#fff'}}>{this.state.marcador}</Text>
                <TouchableHighlight style={classes.button}  onPress={this.decrementa} >
                    <Text style={classes.text} >-</Text>
                </TouchableHighlight>
                <Image style={classes.iconsKf} source={require('../img/aember.png')} />
            </View>
        )
    }
}