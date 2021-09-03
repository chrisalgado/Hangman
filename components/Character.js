import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Character = ({fails}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                { fails >= 1 && <Image 
                    source={require('../images/bar.png')} 
                    style={styles.bar}
                />}
                { fails >= 2 && <Image 
                    source={require('../images/head.png')} 
                    style={styles.head}
                />}
                { fails >= 3 && <Image 
                    source={require('../images/neck.png')} 
                    style={styles.neck}
                />}
                { fails >= 4 && <Image 
                    source={require('../images/corpus.png')} 
                    style={styles.corpus}
                />}
                { fails >= 5 && <Image 
                    source={require('../images/left-arm.png')} 
                    style={styles.leftArm}
                />}
                { fails >= 6 && <Image 
                    source={require('../images/right-arm.png')} 
                    style={styles.rightArm}
                />}
                { fails >= 7 && <Image 
                    source={require('../images/right-hand.png')} 
                    style={styles.rightHand}
                />}
                { fails >= 8 && <Image 
                    source={require('../images/left-hand.png')} 
                    style={styles.leftHand}
                />}
                { fails >= 9 && <Image 
                    source={require('../images/right-leg.png')} 
                    style={styles.rightLeg}
                />}
                { fails >= 10 && <Image
                    source={require('../images/left-leg.png')} 
                    style={styles.leftLeg}
                />}
                { fails >= 11 && <Image
                    source={require('../images/left-foot.png')} 
                    style={styles.leftFoot}
                />}
                { fails >= 12 && <Image 
                    source={require('../images/right-foot.png')} 
                    style={styles.rightFoot}
                />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: '80%',
    },
    bar: {
        width: '40%',
        height: 30,
        resizeMode: 'contain',
        marginTop: 10,
        position: 'relative',
    },
    head: {
        width: '15%',
        height: 50,
        marginLeft: 103,
        marginTop: -10,
        resizeMode: 'contain',
        position: 'relative',
    },
    neck: {
        width: '15%',
        height: 10,
        marginLeft: 103,
        marginTop: -5,
        resizeMode: 'contain',
        position: 'relative',
    },
    corpus: {
        width: '15%',
        height: 40,
        marginLeft: 103,
        marginTop: -5,
        resizeMode: 'contain',
        position: 'relative',
    },
    leftArm: {
        width: '15%',
        height: 20,
        marginLeft: 88,
        marginTop: -39,
        resizeMode: 'contain',
        position: 'relative',
    },
    rightArm: {
        width: '15%',
        height: 20,
        marginLeft: 120,
        marginTop: -20,
        resizeMode: 'contain',
        position: 'relative',
    },
    rightHand: {
        width: '15%',
        height: 10,
        marginLeft: 132,
        marginTop: -4,
        resizeMode: 'contain',
        position: 'relative',
        
    },
    leftHand: {
        width: '15%',
        height: 10,
        marginLeft: 76,
        marginTop: -10,
        resizeMode: 'contain',
        position: 'relative',
    },
    rightLeg: {
        width: 35,
        height: 35,
        marginLeft: 123,
        marginTop: 9,
        resizeMode: 'contain',
        position: 'relative',
    },
    leftLeg: {
        width: 35,
        height: 35,
        marginLeft: 102,
        marginTop: -34,
        resizeMode: 'contain',
        position: 'relative',
    },
    leftFoot: {
        width: 18,
        height: 30,
        marginLeft: 103,
        marginTop: -14,
        resizeMode: 'contain',
        position: 'relative',
    },
    rightFoot: {
        width: 18,
        height: 30,
        marginLeft: 139,
        marginTop: -31,
        resizeMode: 'contain',
        position: 'relative',
    }
});

export default Character;