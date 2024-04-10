import {
	View,
	Text,
	Modal,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Image,
} from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '../constants';
import Button from './Button';

export default function ShareThoughts({ visible, onClose, navigation }) {
	const [value, onChangeText] = useState('Useless Multiline ');
	const onPress = () => {
		navigation.navigate('Welcome');
	};

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<TouchableOpacity
						style={styles.closeButton}
						onPress={onClose}
					>
						<FontAwesome
							name="times"
							size={26}
						/>
					</TouchableOpacity>
					<Image
						source={require('../assets/happy.png')}
						style={styles.image}
						resizeMode="contain"
					/>
					<Text style={styles.text}>You successfully completed</Text>
					<View style={styles.modalContainer}>
						<TextInput
							editable
							multiline
							numberOfLines={10}
							maxLength={80}
							onChangeText={(text) => onChangeText(text)}
							value={value}
							style={{
								borderWidth: 1,
								borderRadius: 10,
								borderColor: Colors.background2,
								paddingHorizontal: 8,
								textAlignVertical: 'top',
							}}
						/>
					</View>
					<View>
						<Button
							title="Submit"
							backgroundColor={Colors.buttonColor}
							onPress={onPress}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
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
		height: '80%',
		width: '95%',
		alignItems: 'center',
	},
	modalContainer: {
		width: '100%',
	},
	text: {
		marginTop: -150,
		fontSize: 30,
	},
	closeButton: {
		position: 'absolute',
		top: 14,
		right: 12,
	},
	image: {
		height: '70%',
		width: '70%',
		marginTop: -80,
	},
});
