import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';
import TimePicker from './TimePicker';
import SelectedTime from './SelectedTime';
import { BookStyles, Colors } from '../constants';
import Progress from './Progress';
import { useDispatch, useSelector } from 'react-redux';
import { startCountdown, stopCountdown } from '../reducers/timerSlice';

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
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<View style={BookStyles.book}>
					<View style={BookStyles.bookLeft}>
						<Image
							source={{ uri: book.image }}
							style={BookStyles.bookImage}
							resizeMode="cover"
						/>
						<View style={BookStyles.bookDetails}>
							<Text style={BookStyles.title}>{book.title}</Text>
							<Text style={BookStyles.author}>{book.author}</Text>
							<View style={BookStyles.categories}>
								{book.categories.map((category, index) => (
									<Text
										key={index}
										style={{ fontStyle: 'italic' }}
									>
										{category}
										{index !== book.categories.length - 1 && ' |'}
									</Text>
								))}
							</View>
						</View>
					</View>
					<View>
						<Progress percentage={book.progress} />
					</View>
				</View>
				<Text style={styles.text}>
					{selectedTime
						? `You are reading ${selectedTime} minutes today, maximise your time`
						: 'You have not set a goal. Set a goal now to get motivated'}
				</Text>
			</View>
			<View style={styles.imageContainer}>
				{selectedTime > 0 && (
					<SelectedTime
						showLog={showLog}
						setShowLog={setShowLog}
					/>
				)}
				<Image
					source={require('../assets/running.png')}
					style={styles.image}
				/>
			</View>
			<View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 4,
	},
	textContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 21,
		marginTop: 20,
		paddingHorizontal: 30,
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
