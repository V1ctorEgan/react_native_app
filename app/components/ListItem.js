import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import AppText from './AppText/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import  Swipeable  from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
            {image && <Image style={styles.image} source={image} />}
            {IconComponent }
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
            </View>

            <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25}/>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:'center',

        padding:15,
        backgroundColor:colors.white,
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },
    title:{
        fontWeight:500,

    },
    subTitle:{
        color:colors.medium,
    },
    detailsContainer:{
        flex:1,
        marginLeft:10,
        justifyContent:'center',
        
    }
})
export default ListItem;