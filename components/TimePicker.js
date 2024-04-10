import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
} from 'react-native';
import { Colors } from '../constants';

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
	const { setShow, setSelectedTime } = props;

	const handleTimeSelection = (time) => {
		setSelectedTime(time);
	};

	const renderTimeOption = ({ item }) => (
		<TouchableOpacity
			style={styles.timeOption}
			onPress={() => {
				handleTimeSelection(item.value), setShow(false);
			}}
		>
			<Text>{item.label}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.header}
				onPress={() => setShow(false)}
			>
				<Text style={styles.headerText}>Cancel</Text>
			</TouchableOpacity>
			<View style={styles.flatListContainer}>
				<FlatList
					data={timeOptions}
					renderItem={renderTimeOption}
					keyExtractor={(item) => item.value.toString()}
					style={styles.flatListContentContainer}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: -20,
		left: 0,
		right: 0,
		height: 200,
		backgroundColor: '#fff',
	},
	flatListContainer: {
		flex: 1,
		maxHeight: 200,
	},
	flatListContentContainer: {
		flexGrow: 1,
	},
	timeOption: {
		paddingVertical: 16,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderBottomWidth: 1,
		backgroundColor: Colors.background2,
		borderBottomColor: '#ccc',
	},
	headerText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
