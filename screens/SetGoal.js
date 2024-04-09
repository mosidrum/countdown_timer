import React, { useState } from 'react';
import { NoTime, SetTime } from '../components';
import { View } from 'react-native';

export default function SetGoal({navigation}) {
	const [readingTime, setReadingTime] = useState(0);

	return <>{readingTime > 0 ? <SetTime /> : <NoTime navigation={navigation}/>}</>;
}
