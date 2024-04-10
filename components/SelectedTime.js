import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function SelectedTime(props) {
	const { selectedTime, startCount } = props;
	const [timeRemaining, setTimeRemaining] = useState(selectedTime * 60);

	useEffect(() => {
		let intervalId;

		if (startCount && selectedTime > 0) {
			intervalId = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);
		}
		return () => clearInterval(intervalId);
	}, [startCount, selectedTime]);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, '0')}mins : ${seconds
			.toString()
			.padStart(2, '0')}secs`;
	};
	return (
		<View style={styles.container}>
			<Text style={styles.time}>{formatTime(timeRemaining)}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	time: {
		fontSize: 26,
		fontWeight: 'bold',
	},
});
