import React, {Component} from 'react'
import {View} from 'react-native'

import Mtg from '../componentes/MagicTheGathering'
import MenuCentro from '../componentes/MenuCentro'

import KeepAwake from 'react-native-keep-awake'

export default class MtgScreen extends Component{
    render(){
        KeepAwake.activate()
        return(
            <View>
                <Mtg nome='Player' pontos={20} cor='#ccc' logo={0} invertido />
                <MenuCentro />
                <Mtg nome='Player' pontos={20} cor='#ccc' logo={0} />
            </View>
        )
    }
}