import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import Progress from './Progress';
import { BookStyles } from '../constants';

export default function BookTemplate({ book, navigation }) {
	return (
		<Pressable
			style={BookStyles.book}
			onPress={() => navigation.navigate('SetGoal', { book })}
		>
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
		</Pressable>
	);
}
