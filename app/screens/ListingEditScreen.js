import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";


import Screen from "../components/Screen";
import {AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms'
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(1000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description')
});

const categories = [
    {
        backgroundColor: colors.red,
        icon: 'floor-lamp',
        label: 'Furniture',
        value: 1
    },
    { label: 'Cars', icon: 'car', backgroundColor: colors.orange, value: 1 },
    {
        label: 'Cameras',
        icon: 'camera',
        backgroundColor: colors.yellow,
        value: 1
    },
    { label: 'Games', icon: 'cards', backgroundColor: colors.green, value: 2 },
 
    {
        label: 'Sports',
        icon: 'basketball',
        backgroundColor: colors.brightBlue,
        value: 3
    },
    {
        label: 'Movies & Music',
        icon: 'headphones',
        backgroundColor: colors.softBlue,
        value: 3
    },
    {
        label: 'Books',
        icon: 'book-open-variant',
        backgroundColor: colors.purple,
        value: 2
    },
    {
        label: 'Other',
        icon: 'folder-outline',
        backgroundColor: colors.grey,
        value: 1
    }

]

function ListingEditScreen(){
    return(
        <Screen style={styles.container}>
            <AppForm
              initialValues={{  
                title: '',
                price: '',
                category: null,
                description: ''}}
              onSubmit={(values)=> console.log(values)}
              validationSchema={validationSchema}
            >
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
                    keyboardType="numeric"
                    maxLength={8} // includes 10000.99
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3} // only works on android
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
                </AppForm>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
    }
})
export default ListingEditScreen;