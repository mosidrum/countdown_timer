import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';
import TimePicker from './TimePicker';
import SelectedTime from './SelectedTime';
import { BookStyles, Colors, noTimeStyles } from '../constants';
import Progress from './Progress';
import { useDispatch, useSelector } from 'react-redux';
import { startCountdown, stopCountdown } from '../reducers/timerSlice';
import BookTemplate from './BookTemplate';

export default function NoTime({ book }) {
	const dispatch = useDispatch();
	const selectedTime = useSelector((state) => state.timer.selectedTime);
	const isCounting = useSelector((state) => state.timer.isCounting);
	const [show, setShow] = useState(false);
	const [showLog, setShowLog] = useState(false);
	const [stayOnTimmer, setStayOnTimmer] = useState(false);

	const checkTheSelectedTime = (selectedTime) => {
		if (selectedTime <= 0) {
			Alert.alert(
				'No time',
				'Please select time',
				[
					{
						text: 'OK',
					},
				],
				{ cancelable: false }
			);
		}
		dispatch(startCountdown());
	};

	const handleStartReading = () => {
		checkTheSelectedTime(selectedTime);
	};

	return (
		<View style={noTimeStyles.container}>
			<View style={noTimeStyles.textContainer}>
				<BookTemplate book={book} />
				<Text style={noTimeStyles.text}>
					{selectedTime
						? `You are reading ${selectedTime} minutes today, maximise your time`
						: 'You have not set a goal. Set a goal now to get motivated'}
				</Text>
			</View>
			<View style={noTimeStyles.imageContainer}>
				{selectedTime > 0 && (
					<SelectedTime
						showLog={showLog}
						setShowLog={setShowLog}
					/>
				)}
				<Image
					source={require('../assets/running.png')}
					style={noTimeStyles.image}
				/>
			</View>
			<View style={noTimeStyles.buttonContainer}>
				{show ? (
					<TimePicker setShow={setShow} />
				) : selectedTime || stayOnTimmer ? (
					<View style={{ gap: 10 }}>
						<View
							style={{ flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<Button
								title="Change Time"
								onPress={() => {
									setShow(true);
								}}
								backgroundColor={Colors.background2}
							/>
							{isCounting && (
								<Button
									title="Log Thought"
									onPress={() => setShowLog(isCounting)}
									backgroundColor={Colors.buttonColor}
								/>
							)}
						</View>
						{isCounting && selectedTime !== 0 ? (
							<Button
								title="Stop Timmer"
								backgroundColor={Colors.buttonColor}
								onPress={() => {
									dispatch(stopCountdown());
									setStayOnTimmer(true);
								}}
							/>
						) : (
							<Button
								title="Start Reading"
								backgroundColor={Colors.buttonColor}
								onPress={handleStartReading}
							/>
						)}
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
