import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import {useDimensions} from '@react-native-community/hooks'

export default function Welcome() {
    return(
        <View style={styles.container}>
        <Image source={require('./assets/splash.png')}/>
        <Text>Jesus is Lord</Text>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
}); 