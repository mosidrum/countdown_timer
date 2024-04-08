import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants';
import { Button } from '../components';
import SetGoal from './SetGoal';

export default function Welcome({ navigation }) {
	const onPress = () => {
		navigation.navigate('SetGoal');
	};

	return (
		<LinearGradient
			style={styles.container}
			colors={[Colors.background, Colors.secondary]}
		>
			<View style={styles.imageContainer}>
				<Image
					source={require('../assets/reading.png')}
					style={styles.image}
					resizeMode="contain"
				/>
			</View>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>Let's get</Text>
				<Text style={styles.title}>Started</Text>
				<View style={styles.textContainer}>
					<Text style={styles.text}>Read and become a future leader</Text>
					<Text style={styles.text}>Read and be informed</Text>
				</View>
				<Button
					title="Set Today's Goal"
					onPress={onPress}
					style={styles.button}
				/>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageContainer: {
		flex: 0.7, // Take 60% of the available space
		justifyContent: 'center',
		alignItems: 'center',
    paddingTop: 60
	},
	image: {
		height: '100%', // Adjust as needed
		width: '100%', // Adjust as needed
	},
	contentContainer: {
		flex: 0.4, // Take remaining 40% of the available space
		paddingHorizontal: 22,
		// paddingTop: 20, // Adjust as needed
	},
	title: {
		fontSize: 50,
		fontWeight: '800',
		color: Colors.white,
	},
	textContainer: {
		marginVertical: 22,
	},
	text: {
		fontSize: 16,
		color: Colors.white,
		marginVertical: 4,
	},
	button: {
		marginTop: 20, // Adjust as needed
	},
});
