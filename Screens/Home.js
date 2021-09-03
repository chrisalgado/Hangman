import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const Home = ( {navigation} ) => {
    return (
        <View style={styles.container}>
                <Text style={styles.Tittle}>WELCOME TO</Text>

                <Image 
                    source={require('../images/hangman.jpg')} 
                    style={styles.logo}
                />

            <TouchableOpacity style={styles.rulesButton} onPress={ () => {
                navigation.navigate('Rules');
            }}> 
                <Text style={styles.TextButton2}> RULES </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Button} onPress={ () => {
                navigation.navigate('Hangman');
            }}> 
                <Text style={styles.TextButton}> TAP TO PLAY</Text>
            </TouchableOpacity>
        </View>
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
            backgroundColor: '#8ab7e4',
            padding: 0,
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
        rulesButton: {
            width: '20%',
            height: 70,
            backgroundColor: '#FFA07A',
            padding: 0,
            marginLeft: 270, 
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: 50,
        },
        TextButton2: {
            color: 'white',
            width: '100%',
            height: '100%',
            marginTop: 52,
            marginLeft: 25,
            fontWeight: 'bold',
            color: '#fff',
        },
        logo: {
            width: '80%',
            height: '80%',
            resizeMode: 'contain',
            marginTop: -150,
        },
        Tittle: {
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 50,
            color: '#8ab7e4',
        }
});

export default Home;