import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function SelectedTime(props) {
	const { selectedTime } = props;

	const formatTime = (time) => {
		return time < 10 ? `0${time}` : time;
	};
	return (
		<View style={styles.container}>
			<Text style={styles.time}>{`${formatTime(selectedTime)} : 00 mins`}</Text>
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
