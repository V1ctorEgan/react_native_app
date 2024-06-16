import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../assets/fishing.jpg')} style={styles.background} blurRadius={1}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo}source={require('../assets/logs.png')}/>
            <Text style={styles.text}> Sell What you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
            <AppButton title='Login' />
            <AppButton title='Register' color='secondary' />
             </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        width:'100%'
        
    },
 
    registerButton:{
        width:'100%',
        height:70,
        backgroundColor:'#4ecdc4',
    },
    logo:{
        width:100,
        height:100,
        
    },
    logoContainer:{
        alignItems:'center',
        position:'absolute',
        top:70,
    },
    text:{
        top:-49,
        fontSize:25,
        fontWeight:'600',
        paddingVertical:20,
    },
    buttonContainer:{
        width:'100%',
        padding:20,
    }

})

export default WelcomeScreen;