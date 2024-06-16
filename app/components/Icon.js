import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function Icon({
	name,
	backgroundColor = "#000",
	size = 40,
	iconColour = "#fff",
}) {
	return (
		<View
			style={{
				width: size,
				height: size,
                borderRadius:size/2,
				backgroundColor,
                justifyContent:'center',
                alignItems:'center',
			}}
		>
			<MaterialCommunityIcons
				name={name}
				color={iconColour}
				size={size * 0.5}
			/>
		</View>
	);
}

export default Icon;
