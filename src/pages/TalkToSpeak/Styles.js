import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    button: {        
        width: '80%',
        height: 50,
        borderRadius: 10,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    container: {
        flex: 1,
        backgroundColor: '#a0ebe6',
        alignItems: 'center'
    },
    containerGreetings: {
        flexDirection: 'row',
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTitleEmoji: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        backgroundColor: 'white',
        borderRadius: 30,

        width: '80%',
        height: 50
    },

    emojis: {
        fontSize: 30,
        marginLeft: 5
    },

    textButton: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    textInput: {
        width: '80%',
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    textTitle: {
        fontSize: 24,
        color: '#00838c',
        fontWeight: 'bold'
    },
    textTitleGreeting: {
        fontSize: 24,
        color: '#696b6b',
        fontWeight: 'bold'
    }
})