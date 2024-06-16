import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';

import ListItem from '../components/ListItem';
function ListingDetailsScreen(props) {
    return (
         <View>
            <Image style={styles.image} source={require('../assets/chair.jpg')}/>
            <View style={styles.detailsContainer}>
             
            <AppText style={styles.title} >Chairs for Sale</AppText>
            <AppText style={styles.price} >$100</AppText>   
            <View style={styles.userContainer}>
                <ListItem
                image={require("../assets/pic.png")}
                title="George"
                subTitle="5 Listings" 
            />
            </View>


            </View>
         </View>
    );
}
const styles = StyleSheet.create({

    detailsContainer:{
        padding:20
    },
    image:{
        width:'100%',
        height:300
    },

    price:{
        fontSize:20,
        color:colors.secondary,
        fontWeight:'500',
        marginVertical:1

    },
    title:{
        fontSize:24,
        fontWeight:500
    },
    userContainer:{
        marginVertical:20
    }
})
export default ListingDetailsScreen;