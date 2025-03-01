import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import AppText from './AppText/AppText';

function PickerItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.text}>
            <AppText>{item.label}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text:{
        padding:20,
    }
})
export default PickerItem;