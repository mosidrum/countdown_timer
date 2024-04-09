import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';
import TimePicker from './TimePicker';

export default function NoTime({ navigation }) {
	const [show, setShow] = useState(true);

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					You have not set a goal. Set a goal now to get motivated
				</Text>
			</View>
			<View style={styles.imageContainer}>
				<Image
					source={require('../assets/running.png')}
					style={styles.image}
				/>
			</View>
			<View style={styles.buttonContainer}>
				{show ? (
					<TimePicker />
				) : (
					<Button
						title="Set Today's Goal"
						onPress={() => navigation.navigate('SetTime')}
					/>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	textContainer: {
		paddingHorizontal: 30,
		marginTop: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 21,
		textAlign: 'center',
	},
	imageContainer: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 60,
	},
	image: {
		height: '100%',
		width: '100%',
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0,
		paddingHorizontal: 10,
	},
});
