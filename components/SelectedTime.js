import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import ShareThoughts from './ShareThoughts';

export default function SelectedTime(props) {
	const { selectedTime, startCount } = props;
	const [timeRemaining, setTimeRemaining] = useState(selectedTime * 60);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		let intervalId;
		setTimeRemaining(selectedTime * 60);
		if (startCount && selectedTime > 0) {
			intervalId = setInterval(() => {
				setTimeRemaining((prevTime) => {
					const timeFinished = Math.max(0, prevTime - 1);
					return timeFinished;
				});
			}, 1000);
		} else {
			clearInterval(intervalId);
		}

		return () => clearInterval(intervalId);
	}, [startCount, selectedTime]);

	useEffect(() => {
		if (timeRemaining === 0) {
			setModalVisible(true);
		}
	}, [timeRemaining]);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, '0')}min : ${seconds
			.toString()
			.padStart(2, '0')}sec`;
	};
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.time}>{formatTime(timeRemaining)}</Text>
			</View>
			{modalVisible && (
				<ShareThoughts
					visible={modalVisible}
					onClose={() => setModalVisible(!modalVisible)}
				/>
			)}
		</>
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
