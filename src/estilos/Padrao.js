import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        width: '100%',
        fontWeight: 'bold',
    },
    containerJogador: {
        display: 'flex',
        flexDirection: 'row',
        height: (Dimensions.get('screen').height / 2) - (Dimensions.get('screen').width / 8) +10,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    containerElementosKf: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    player: {
        fontSize: 40,
        width: '95%',
        height: '45%',
    },
    texto: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    containerBotoes: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
        //marginTop: -(Dimensions.get('window').height / 2),//-((Dimensions.get('window').width / 8) + 5),
    },
    btCor: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 5,
        width: (Dimensions.get('window').width / 10),
        height: (Dimensions.get('window').width / 10),
    },
    botao: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        height: (Dimensions.get('window').width / 6),
        width: (Dimensions.get('window').width / 6),
        backgroundColor: '#FFA500',//laranja
    },
    preto: {
        backgroundColor: '#8b7b8b',
    },
    branco: {
        backgroundColor: '#f7ee63',
    },
    azul: {
        backgroundColor: '#87ceff',
    },
    verde: {
        backgroundColor: '#98fb98',
    },
    vermelho: {
        backgroundColor: '#ff6347',
    },
    invertido: {
        transform: [{rotate: '180deg'}],
    },
    imagemFundo: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginHorizontal: (Dimensions.get('window').width / 2) -150,
        opacity: 0.5,
        alignSelf: 'flex-end',
    },
    iconesKf: {
        width: (Dimensions.get('window').width / 6),
        height: (Dimensions.get('window').width / 6),
    },
    btZerar: {
        width:(Dimensions.get('window').width / 6),
        height:(Dimensions.get('window').width / 6),
        alignSelf: 'center'
    }
})