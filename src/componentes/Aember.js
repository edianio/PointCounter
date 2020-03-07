import React from 'react'
import ImgRecycle from '../img/reciclar.png'
import ImgAember from '../img/aember.png'
import classes from '../estilos'

import {View, Text, Image, TouchableHighlight} from 'react-native'

export default class Aember extends React.Component{
  state = {
    scorer: 0
  }

  increment = () => this.setState(prevState => ({
    scorer: prevState.scorer + 1
  }))

  decrement = () => {
    if(this.state.scorer > 0){
      this.setState(prevState => ({
        scorer: prevState.scorer - 1
      }))
    }
  }

  reset = () => this.setState({scorer: 0})

  render () {
    const { scorer } = this.state

    return(
      <View style={[classes.containerButtons, {flexDirection: 'row', width: '90%'}]}>
        <TouchableHighlight style={{borderRadius: 40}} onPress={this.reset} >
          <Image style={classes.btZero} source={ImgRecycle} />
        </TouchableHighlight>

        <TouchableHighlight style={classes.button} onPress={this.increment} >
          <Text style={classes.text} >+</Text>
        </TouchableHighlight>

        <Text style={{fontSize: 45, color: '#fff'}}>{scorer}</Text>

        <TouchableHighlight style={classes.button} onPress={this.decrement} >
          <Text style={classes.text} >-</Text>
        </TouchableHighlight>

        <Image style={classes.iconsKf} source={ImgAember} />
      </View>
    )
  }
}