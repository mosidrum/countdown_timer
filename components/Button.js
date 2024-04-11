import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../constants';

export default function Button(props) {
	const { onPress, title, backgroundColor } = props;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.button, { backgroundColor}]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingBottom: 16,
		paddingVertical: 10,
    paddingHorizontal: 20,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: Colors.black,
		fontSize: 18,
		fontWeight: '600',
	},
});
