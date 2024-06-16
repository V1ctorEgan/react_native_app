import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	TouchableOpacity,
	Button,
	TextInput,
	Switch,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState } from "react";

import Welcome from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/config/colors";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
 
export default function App() {
 
	const [category, setCategory] = useState();
	const categories = [
		{ label: "Furnitue", value:1},
		{ label: "Clothing", value:2},
		{ label: "Cars", value:3}
	]
	return (
		// <GestureHandlerRootView  style={{ flex: 1 }}>
		// <MessagesScreen />

		// </GestureHandlerRootView>
		<ListingEditScreen />
		);
}
