import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { timePickerStyles } from '../constants';
import { useDispatch } from 'react-redux';
import { setSelectedTime, stopCountdown } from '../reducers/timerSlice';

const timeOptions = [
	{ label: '1 minutes', value: 1 },
	{ label: '5 minutes', value: 5 },
	{ label: '10 minutes', value: 10 },
	{ label: '20 minutes', value: 20 },
	{ label: '30 minutes', value: 30 },
	{ label: '40 minutes', value: 40 },
	{ label: '50 minutes', value: 50 },
	{ label: '59 minutes', value: 59 },
];

export default function TimePicker(props) {
	const { setShow } = props;
	const dispatch = useDispatch();

	const handleTimeSelection = (time) => {
		dispatch(setSelectedTime(time));
		dispatch(stopCountdown());
	};

	const renderTimeOption = ({ item }) => (
		<Pressable
			style={timePickerStyles.timeOption}
			onPress={() => {
				handleTimeSelection(item.value), setShow(false);
			}}
		>
			<Text>{item.label}</Text>
		</Pressable>
	);

	return (
		<View style={timePickerStyles.container}>
			<Pressable
				style={timePickerStyles.header}
				onPress={() => setShow(false)}
			>
				<Text style={timePickerStyles.headerText}>Cancel</Text>
			</Pressable>
			<View style={timePickerStyles.flatListContainer}>
				<FlatList
					data={timeOptions}
					renderItem={renderTimeOption}
					keyExtractor={(item) => item.value.toString()}
					style={timePickerStyles.flatListContentContainer}
				/>
			</View>
		</View>
	);
}
