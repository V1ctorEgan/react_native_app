import React, { useState } from "react";
import {
	TextInput,
	View,
	StyleSheet,
	Platform,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText/AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
	icon,
	items,
	numberOfColumns = 1,
	onSelectItem,
	PickerItemComponent = PickerItem,
	placeholder,
	selectedItem,
	width="100%"
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, {width}]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={18}
							color={colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>
							{selectedItem.label}
						</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={colors.medium}
						style={styles.icon}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button
						title="close"
						onPress={() => setModalVisible(false)}
					/>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numberOfColumns}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
		// justifyContent:'center',
		padding: 15,
		marginVertical: 10,
	},
	placeholder:{
		color:colors.medium,
		flex:1,
		
	},
	text: {
		flex: 1,
	},

	icon: {
		marginRight: 10,
	},
});
export default AppPicker;
