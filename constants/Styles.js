import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const BookStyles = StyleSheet.create({
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