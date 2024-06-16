import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name='close' size={30} color={colors.white}/>
        </View>
        <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' size={35} color={colors.white}/>

        </View>
        <Image style={styles.image} source={require('../assets/flower.jpg')} resizeMode='contain'/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        flex:1,
    },
    closeIcon:{
 
        position:'absolute',
        top:40, 
        left:30
    },
    deleteIcon:{
        position:'absolute',
        top:40, 
        right:30
    },
    image:{
        height:'100%',
        width:'100%',

    },

 



})
export default ViewImageScreen;