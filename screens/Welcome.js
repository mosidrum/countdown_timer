import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants';
import { Button } from '../components';
import SetGoal from './SetGoal';

export default function Welcome({ navigation }) {
	const onPress = () => {
		navigation.navigate('Book');
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
				<View style={styles.buttonContainer}>
					<Button
						title="START"
						onPress={onPress}
						backgroundColor={Colors.buttonColor}
					/>
				</View>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageContainer: {
		flex: 0.7,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 60,
	},
	image: {
		height: '100%',
		width: '100%',
	},
	contentContainer: {
		flex: 0.4,
		paddingHorizontal: 22,
		marginTop: -56,
	},
	title: {
		fontSize: 36,
		color: Colors.black,
	},
	textContainer: {
		marginBottom: 42,
		marginTop: 10,
	},
	text: {
		fontSize: 18,
		color: Colors.black,
		marginVertical: 4,
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0,
		paddingHorizontal: 10,
	},
});
