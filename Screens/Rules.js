import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const Rules = ( ) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <Text style={styles.Tittle}>HOW TO PLAY?</Text>
            <View style={styles.info}>
                <Text style={styles.rules}> - Press the "TAP TO PLAY" button to start the game.</Text>
                <Text style={styles.rules}> - Once you start the game, the application will give you a random word to try to guess.</Text>
                <Text style={styles.rules}> - If you type the wrong letter, the character will start to appear on the screen hanged (avoid killing him by guessing the word)</Text>
                <Text style={styles.rules}> - If you already guess the entire word, press the "new Word" Button to get a new Word to guess</Text>
                <Text style={styles.rules}> - Avoid capital letters, every word given to you is in lowercase as if you type a capital letter it will count as an error </Text>
                <Text style={styles.rules}> - Have fun!</Text>
            </View>

            
        </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    Button: {
        width: '100%',
        height: 80,
        backgroundColor: '#e6e0f0',
        padding: 0,
        marginBottom: 150,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    TextButton: {
        color: 'white',
        width: '100%',
        height: '100%',
        marginTop: 60,
        marginLeft: 290,
        fontWeight: 'bold',
    },
    Tittle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        color: '#3A86D2',
    },
    info: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height,
        alignItems: 'center',
        position: 'relative',
        padding: 10,
    },
    rules: {
        marginTop: 10,
        margin: 20,
        fontWeight: 'bold',
    },
});

export default Rules;