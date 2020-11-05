import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native';

import Tts from 'react-native-tts';
import Emoji from 'react-native-emoji';

const App = () => {
    const [ textInput, setTextInput ] = useState('');

    const buttonsGreetingsBR = [
        {id: 1, name: 'Bom dia', emoji: 'sun_with_face', text: 'Bom dia!', color: '#f2f079'},
        {id: 2, name: 'Boa Tarde', emoji: 'sunrise', text: 'Boa Tarde!', color: '#ffb145'},
        {id: 3, name: 'Boa Noite', emoji: 'crescent_moon', text: 'Boa Noite!', color: '#a6a39f'}
    ]

    const buttonsGreetingsUS = [
        {id: 1, name: 'Good Morning', emoji: 'sun_with_face', text: 'Good Morning!', color: '#f2f079'},
        {id: 2, name: 'Good Afternoon', emoji: 'sunrise', text: 'Good Afternoon!', color: '#ffb145'},
        {id: 3, name: 'Good Evening', emoji: 'crescent_moon', text: 'Good Evening!', color: '#a6a39f'}
    ]

    function speak(text, language){
        Tts.setDefaultLanguage(language);
        Tts.setDefaultRate(0.4);
        Tts.speak(text, {
            androidParams: {
              KEY_PARAM_PAN: -1,
              KEY_PARAM_VOLUME: 0.5,
              KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.containerTitleEmoji}>
                <Text style={styles.textTitle}>TALK TO SPEAK</Text>
                <Emoji name="loudspeaker" style={styles.emojis}/>
            </View>

            <TextInput
                style={styles.textInput}
                placeholder="Digite sua frase"
                placeholderTextColor="#999"
                autoCapitalize='none'
                autoCorrect={false}
                value={textInput}
                onChangeText={setTextInput}
            />

            <TouchableOpacity
                style={[styles.button, {backgroundColor: '#09aba0'}]}
                onPress={() => {speak(textInput, 'pt-BR')}}
            >
                <Text style={styles.textButton}>SPEAK</Text>
                <Emoji name="loud_sound" style={styles.emojis}/>
            </TouchableOpacity>

            <View style={styles.containerGreetings}>
                <Text style={styles.textTitleGreeting}>Saudações</Text>
                <Emoji name="flag-br" style={styles.emojis}/>
            </View>
            {buttonsGreetingsBR.map(({name, emoji, text, color}, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.button, {backgroundColor: color}]}
                    onPress={() => {speak(text, 'pt-BR')}}
                >
                    <Text style={styles.textButton}>{name}</Text>
                    <Emoji name={emoji} style={styles.emojis} />
                </TouchableOpacity>
            ))}

            <View style={styles.containerGreetings}>
                <Text style={styles.textTitleGreeting}>Greetings</Text>
                <Emoji name="flag-um" style={styles.emojis}/>                
            </View>
            {buttonsGreetingsUS.map(({name, emoji, text, color}, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.button, {backgroundColor: color}]}
                    onPress={() => {speak(text, 'en-US')}}
                >
                    <Text style={styles.textButton}>{name}</Text>
                    <Emoji name={emoji} style={styles.emojis} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
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
export default App;
