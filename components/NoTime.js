import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';
import TimePicker from './TimePicker';
import SelectedTime from './SelectedTime';
import { Colors } from '../constants';

export default function NoTime({ navigation }) {
	const [show, setShow] = useState(false);
	const [selectedTime, setSelectedTime] = useState(null);

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					{selectedTime
						? `You are reading ${selectedTime} minutes today, maximise your time`
						: 'You have not set a goal. Set a goal now to get motivated'}
				</Text>
			</View>
			<View style={styles.imageContainer}>
				{selectedTime ? (
					<SelectedTime selectedTime={selectedTime} />
				) : (
					<Image
						source={require('../assets/running.png')}
						style={styles.image}
					/>
				)}
			</View>
			<View style={styles.buttonContainer}>
				{show ? (
					<TimePicker
						setShow={setShow}
						setSelectedTime={setSelectedTime}
					/>
				) : selectedTime ? (
					<View style={{ gap: 10}}>
						<Button
							title="Change Time"
							onPress={() => setShow(true)}
							backgroundColor={Colors.background2}
						/>
						<Button
							title="Start Reading"
							onPress={() => handleStartReading()}
							backgroundColor={Colors.buttonColor}
						/>
					</View>
				) : (
					<Button
						title="Set Today's Goal"
						onPress={() => setShow(true)}
						backgroundColor={Colors.buttonColor}
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
