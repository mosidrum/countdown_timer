import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function SelectedTime(props) {
	const { selectedTime, startCount, remainingTime, setRemainingTime } = props;

	useEffect(() => {
		if (startCount && remainingTime > 0) {
			const intervalId = setInterval(() => {
				setRemainingTime((prevTime) => Math.max(0, prevTime - 1));
			}, 1000);
			return () => clearInterval(intervalId);
		}
	}, [startCount, remainingTime]);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, '0')} : ${seconds
			.toString()
			.padStart(2, '0')} mins`;
	};
	return (
		<View style={styles.container}>
			<Text style={styles.time}>{formatTime(selectedTime)}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	time: {
		fontSize: 48,
		fontWeight: 'bold',
	},
});
