import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {AppForm, AppFormField, SubmitButton } from '../components/forms'
 

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().min(4).required().label("Password"),
});
function LoginScreen(props) {
	return (
		<Screen style={styles.container}>
			<Image source={require("../assets/logs.png")} style={styles.logo} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon={"email"}
					name="email"
					keyboardType="email-address"
					textContentType="emailAddress"
					placeholder="Email"
				/>

				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon={"lock"}
					name="password"
					placeholder="Password"
					secureTextEntry={true}
					textContentType="password"
				/>

				<SubmitButton title={"Login"} />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});
export default LoginScreen;
