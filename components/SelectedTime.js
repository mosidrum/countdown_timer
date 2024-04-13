import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTime, stopCountdown } from '../reducers/timerSlice';
import LogModal from './LogModal';
import { selectedTimeStyles } from '../constants';

export default function SelectedTime(props) {
	const { showLog, setShowLog } = props;
	const dispatch = useDispatch();
	const selectedTime = useSelector((state) => state.timer.selectedTime);
	const isCounting = useSelector((state) => state.timer.isCounting);
	const [timeRemaining, setTimeRemaining] = useState(selectedTime * 60);

	useEffect(() => {
		let intervalId;
		setTimeRemaining(selectedTime * 60);
		if (isCounting && selectedTime > 0) {
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
	}, [isCounting, selectedTime]);

	useEffect(() => {
		if (timeRemaining === 0) {
			dispatch(stopCountdown());
			dispatch(setSelectedTime(0));
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
			<View style={selectedTimeStyles.container}>
				<Text style={selectedTimeStyles.time}>{formatTime(timeRemaining)}</Text>
			</View>
			{showLog && (
				<LogModal
					visible={showLog}
					onClose={() => {
						setShowLog(!showLog);
					}}
				/>
			)}
		</>
	);
}
