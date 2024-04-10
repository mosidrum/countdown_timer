import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import ShareThoughts from './ShareThoughts';

export default function SelectedTime(props) {
	const { selectedTime, startCount } = props;
	const [timeRemaining, setTimeRemaining] = useState(selectedTime * 60);
	const [modal, setModal] = useState(true);

	useEffect(() => {
		let intervalId;
		setTimeRemaining(selectedTime * 60);
		if (startCount && selectedTime > 0) {
			intervalId = setInterval(() => {
				setTimeRemaining((prevTime) => {
					const timeFinished = Math.max(0, prevTime - 1);
					if (timeFinished === 0) {
						setModal(true);
					}
					return timeFinished;
				});
			}, 1000);
		} else {
			clearInterval(intervalId);
		}

		return () => clearInterval(intervalId);
	}, [startCount, selectedTime]);

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
			{modal && (
				<ShareThoughts
					visible={modal}
					onClose={() => setModal(false)}
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
