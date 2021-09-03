import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Text, Dimensions, TextInput,TouchableOpacity, Alert } from 'react-native';


const GuessSection = (props) => {
    let textInputRef = null;

    const [newWord, setNewWord] = useState('');
    const [data, setData] = useState([]);
    const [currentWord, setCurrentWord] = useState('');
    
    const [randomWord, setRandomWord] = useState([])

    const getData = async () => {
        try{
            const result = await fetch(
                'https://random-words-api.vercel.app/word', {method: 'get'}
            );
            const resultToJson = await result.json()
            console.log(resultToJson)
            return resultToJson[0].word.toLowerCase()

            
        }catch(e){
            console.log(e)
        }
    }


    useEffect( () => {
        getWordToGuess()
        textInputRef.focus()
    }, [])

    
    /* This function choose a random word */
    const getWordToGuess = async () => {
        let word = await getData();
        console.log(word);
        let wordData = word.split('').map(character => ({character, selected:false}))
        setData(wordData); 
        setNewWord(word);
    }

    const onChangeText = (word) => {
        const lastLetter = word[word.length - 1]
        const containCharacter = newWord.includes(lastLetter)
        
        if(!containCharacter){
            console.log(containCharacter)
            props.onCharacterError()
            
        }else{
            const newData = data.map( (item) => ( {character:item.character, selected:(item.character==lastLetter || item.selected)} ) )
            if(newData.filter(item => item.selected).length == data.length){
                console.log('console log win');
                getWordToGuess() 
                setCurrentWord('')
                props.youWonMessage()
            }
            setData(newData)
        }
    }


    return(
        <View style={styles.container}>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={
                        () => { 
                            getWordToGuess() 
                            setCurrentWord('')
                            props.restartCharacter()
                        } 
                    }
                >
                    <Text style={styles.TextButton}>New Word</Text>
                </TouchableOpacity>
                

                    <View style={styles.container3}>
                            {data.map((character, i) => 
                            <View style={styles.ShowText} key={i}>
                                {character.selected && <Text style={styles.TextToShow} > {character.character}</Text>}
                            </View>)}
                    </View>
                    <View style={styles.container2}>
                        
                        <TextInput 
                            style={styles.Input}
                            autoFocus= {true}
                            onChangeText={onChangeText}
                            value=''
                            autoCapitalize={'none'}
                            ref={ref => textInputRef=ref}
                        />
                    </View>
        </View>
    ); 
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    Text: {
        padding: 28,
        width: Dimensions.get('window').width,
        textAlign: 'center',
    },
    container2: {
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    container3: {
        width: Dimensions.get('window').width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
        marginBottom: 80,
    },
    ShowText: {
        backgroundColor: '#e2e1e1',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: 4,
        borderRadius: 5,
        borderWidth: 1,
        width: 25,
        alignItems: 'center',
    },
    Input: {
        width: 0,
        height: 0,
        borderWidth: 0,
        padding: 10,
        textAlign: 'center',
        fontSize: 25,
    },
    Button: {
        width: 90,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: '#3A86D2',
        marginBottom: 100,
        marginLeft: 250,
        position: 'relative',
    },
    TextButton: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'center'
    },
});

export default GuessSection;