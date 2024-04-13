import { StyleSheet } from 'react-native';
import Colors from './Colors';

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

export const noTimeStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 4,
	},
	textContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 21,
		marginTop: 20,
		paddingHorizontal: 30,
		textAlign: 'center',
	},
	imageContainer: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 60,
	},
	image: {
		height: '100%',
		width: '100%',
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0,
		paddingHorizontal: 10,
	},
});

export const buttonStyles = StyleSheet.create({
	button: {
		paddingBottom: 16,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: Colors.black,
		fontSize: 18,
		fontWeight: '600',
	},
});

export const timePickerStyles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: -20,
		left: 0,
		right: 0,
		height: 200,
		backgroundColor: '#fff',
	},
	flatListContainer: {
		flex: 1,
		maxHeight: 200,
	},
	flatListContentContainer: {
		flexGrow: 1,
	},
	timeOption: {
		paddingVertical: 16,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderBottomWidth: 1,
		backgroundColor: Colors.background2,
		borderBottomColor: '#ccc',
	},
	headerText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export const book = StyleSheet.create({
	bookHeading: {
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export const selectedTimeStyles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	time: {
		fontSize: 26,
		fontWeight: 'bold',
	},
});

export const logModalStyles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalView: {
		backgroundColor: 'white',
		borderRadius: 20,
		paddingHorizontal: 10,
		height: '50%',
		width: '95%',
		alignItems: 'center',
	},
	modalContainer: {
		width: '100%',
		marginTop: 60,
	},
	text: {
		fontSize: 22,
		marginBottom: 14,
	},
	closeButton: {
		position: 'absolute',
		top: 14,
		right: 12,
	},
	button: {
		width: '100%',
		marginTop: 16,
	},
});
