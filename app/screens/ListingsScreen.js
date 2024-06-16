import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const Listings = [
    {
        id:1,
        title: 'Exotic Chair',
        price: 100,
        image: require("../assets/chair.jpg")

    },
    {
        id:2,
        title: 'Car',
        price: 21000,
        image: require("../assets/l_car.jpg")

    },
    {
        id:3,
        title: 'Benz',
        price: 10000,
        image: require("../assets/benz.jpg")

    },
]

function ListingsScreen(props) {
    return (
         <Screen style={styles.screen}>
            <FlatList
                data={Listings}
                keyExtractor={Listing => Listing.id.toString()}
                renderItem={({item})=>
                    <Card
                        title={item.title}
                        subTitle={"$"+item.price}
                        image={item.image}
                        />
                    }   
            />
         </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:15,
        backgroundColor:colors.light,
    }
})
export default ListingsScreen;