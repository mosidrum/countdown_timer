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
				<Text style={styles.title}>Let's make a</Text>
				<Text style={styles.title}>habit of reading</Text>
				<View style={styles.textContainer}>
					<Text style={styles.text}>Track your daily reading, log your</Text>
					<Text style={styles.text}>thoughts and favourite quotes</Text>
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
		fontSize: 36,
		color: Colors.black,
	},
	textContainer: {
		marginTop: 12,
    marginBottom: 52
	},
	text: {
		fontSize: 18,
		color: Colors.black,
		marginVertical: 4,
	},
	button: {
		marginTop: 20, // Adjust as needed
	},
});
