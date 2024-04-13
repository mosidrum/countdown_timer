import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { buttonStyles } from '../constants';

export default function Button(props) {
	const { onPress, title, backgroundColor } = props;
	return (
		<Pressable
			onPress={onPress}
			style={[buttonStyles.button, { backgroundColor}]}
		>
			<Text style={buttonStyles.text}>{title}</Text>
		</Pressable>
	);
}

