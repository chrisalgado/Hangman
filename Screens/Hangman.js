import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Character from '../components/Character';
import GuessSection from '../components/GuessSection';

const Hangman = () => {
    const [fails, setFails] = useState(0);

    const onCharacterError = (  ) => {
        console.log('OnPressEvaluate');
        setFails(fails + 1);
        console.log(fails)
        if (fails >= 11) {
            Alert.alert(
                'GAME OVER',
                'You lost the game, select an option...',
                [
                    {
                        text: 'Cancel',
                        onPress: () => {
                            
                        },
                        style: 'cancel',
                    },
                    {
                        text: 'Keep Playing',
                        onPress: () => {
                            setFails(0)
                        },
                        style: 'Aceptar',
                    },
                ],
                { cancelable: true}
            );
        }
    }

    const restartCharacter = () => {
        setFails(0);
    }

    const YouWonMessage = () => {
        Alert.alert(
            'YOU WON',
            'CONGRATULATION, YOU GUESSED THE WORD',
            [
                {
                    text: 'OK',
                    onPress: () => {
                        
                    },
                    style: 'cancel',
                },
                {
                    text: 'Keep Playing',
                    onPress: () => {
                        setFails(0)
                    },
                    style: 'Aceptar',
                },
            ],
            { cancelable: true}
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Character fails={fails} />
            </View>
            <View>
                <GuessSection onCharacterError={onCharacterError} restartCharacter={restartCharacter} youWonMessage= {YouWonMessage}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '90%',
        backgroundColor: '#fff',
    },
});

export default Hangman;