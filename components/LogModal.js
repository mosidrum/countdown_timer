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

export default function LogModal({ visible, onClose, navigation }) {
	const [value, onChangeText] = useState('Log your thought here');
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
					<View style={{width: '100%'}}>
						<TouchableOpacity
							style={styles.closeButton}
							onPress={onClose}
						>
							<FontAwesome
								name="times"
								size={26}
							/>
						</TouchableOpacity>
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
									padding: 6,
								}}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title="Submit"
								backgroundColor={Colors.buttonColor}
								onPress={onPress}
							/>
						</View>
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
