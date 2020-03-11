import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        width: '100%',
        fontWeight: 'bold',
    },
    containerPlayer: {
        display: 'flex',
        flexDirection: 'row',
        height: (Dimensions.get('screen').height / 2) - (Dimensions.get('screen').width / 8) +10,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    containerElementsKf: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    containerMenuCenter: {
        backgroundColor: '#cc0',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    player: {
        fontSize: 40,
        width: '95%',
        height: '45%',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    containerButtons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
        //marginTop: -(Dimensions.get('window').height / 2),//-((Dimensions.get('window').width / 8) + 5),
    },
    btColor: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 5,
        width: (Dimensions.get('window').width / 10),
        height: (Dimensions.get('window').width / 10),
    },
    button: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        height: (Dimensions.get('window').width / 6),
        width: (Dimensions.get('window').width / 6),
        backgroundColor: '#FFA500',//laranja
    },
    black: {
        backgroundColor: '#8b7b8b',
    },
    white: {
        backgroundColor: '#f7ee63',
    },
    blue: {
        backgroundColor: '#87ceff',
    },
    green: {
        backgroundColor: '#98fb98',
    },
    red: {
        backgroundColor: '#ff6347',
    },
    inverted: {
        transform: [{rotate: '180deg'}],
    },
    imageBackground: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginHorizontal: (Dimensions.get('window').width / 2) -150,
        opacity: 0.5,
        alignSelf: 'flex-end',
    },
    iconsKf: {
        width: (Dimensions.get('window').width / 6),
        height: (Dimensions.get('window').width / 6),
    },
    btZero: {
        width:(Dimensions.get('window').width / 6),
        height:(Dimensions.get('window').width / 6),
        alignSelf: 'center'
    }
})