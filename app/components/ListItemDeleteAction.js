import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View,  } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function ListItemDeleteAction({onPress}) {
    return (
         <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
            <View>
                <MaterialCommunityIcons name='trash-can' size={69} color='red' />
            </View>
         </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        width:70,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
export default ListItemDeleteAction;