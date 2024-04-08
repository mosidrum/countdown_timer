import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../constants';

export default function Button(props) {
	return (
		<TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingBottom: 16,
		paddingVertical: 10,
		borderColor: Colors.primary,
		borderWidth: 2,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'centeer',
	},
});
