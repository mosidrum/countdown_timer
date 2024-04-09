import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Progress } from '../components';
import { Colors, dummyBooks } from '../constants';

export default function Book() {
	return (
		<View style={styles.container}>
			<View style={styles.bookHeading}>
				<Text style={{ fontSize: 20 }}>Books currently reading</Text>
			</View>
			{dummyBooks.map((book) => (
				<TouchableOpacity style={styles.book}>
					<View style={styles.bookLeft}>
						<Image
							source={{ uri: book.image }}
							style={styles.bookImage}
							resizeMode="cover"
						/>
						<View style={styles.bookDetails}>
							<Text style={styles.title}>{book.title}</Text>
							<Text style={styles.author}>{book.author}</Text>
							<View style={styles.categories}>
								{book.categories.map((category, index) => (
									<Text style={{ fontStyle: 'italic' }}>
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
				</TouchableOpacity>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bookHeading: {
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	book: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: Colors.background2,
		borderRadius: 10,
		padding: 8,
		marginVertical: 4,
		marginHorizontal: 8,
	},
	bookLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	bookImage: {
		width: 60,
		height: 60,
		margin: 6,
	},
	categories: {
		flexDirection: 'row',
		gap: 6,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	author: {
		fontSize: 16,
	},
	bookDetails: {
		gap: 4,
	},
});
