import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { Colors } from '../constants';

export default function Progress({ percentage }) {
	const radius = 25;
	const strokeWidth = 5;
	const circumference = 2 * Math.PI * radius;

	const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const textX = radius;
	const textY = radius + strokeWidth / 2 + 4;

	return (
		<View style={styles.container}>
			<Svg
				width={radius * 2}
				height={radius * 2}
			>
				<Circle
					stroke="#E5E5E5"
					fill="none"
					strokeWidth={strokeWidth}
					cx={radius}
					cy={radius}
					r={radius - strokeWidth / 2}
				/>
				<Circle
					stroke={Colors.buttonColor}
					fill="none"
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					strokeDasharray={`${circumference} ${circumference}`}
					strokeDashoffset={strokeDashoffset}
					cx={radius}
					cy={radius}
					r={radius - strokeWidth / 2}
					transform={`rotate(-90 ${radius} ${radius})`}
				/>
				<SvgText
					x={textX}
					y={textY}
					textAnchor="middle"
					fontSize={14}
					fill={Colors.black}
				>
					{`${percentage}%`}
				</SvgText>
			</Svg>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
