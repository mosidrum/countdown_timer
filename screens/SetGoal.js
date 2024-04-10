import React, { useState } from 'react';
import { NoTime, SetTime } from '../components';
import { View } from 'react-native';

export default function SetGoal({ route }) {
	const { book } = route.params;

	return (
		<>
			<NoTime book={book} />
		</>
	);
}
