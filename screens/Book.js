import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Book() {
	const book = {
		title: 'Wining mentality',
		author: 'Mendes Guru',
		image: 'https://i.ibb.co/GsC0Pns/one.jpg',
		categories: ['fiction', 'sciences', 'finance'],
	};

	return (
		<View style={styles.container}>
			<View style={styles.bookHeading}>
				<Text style={{ fontSize: 20 }}>Books currently reading</Text>
			</View>
			<View style={styles.book}>
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
							{book.categories.map((category) => (
								<Text style={{ fontStyle: 'italic' }}>{category} |</Text>
							))}
						</View>
					</View>
				</View>
				<View>
					<Text>Progress</Text>
				</View>
			</View>
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
		gap: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderRadius: 10,
		padding: 8,
		margin: 8,
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
