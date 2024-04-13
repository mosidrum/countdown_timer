import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { BookTemplate, Progress } from '../components';
import { Colors, book, dummyBooks } from '../constants';

export default function Book({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<View style={book.bookHeading}>
				<Text style={{ fontSize: 20 }}>Books currently reading</Text>
			</View>
			{dummyBooks.map((book) => (
				<BookTemplate
					book={book}
					key={book.id}
					navigation={navigation}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({});
