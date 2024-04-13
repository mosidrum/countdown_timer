import { View, Modal, TouchableOpacity, TextInput } from 'react-native';
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
			<View style={logModalStyles.centeredView}>
				<View style={logModalStyles.modalView}>
					<View style={{ width: '100%' }}>
						<TouchableOpacity
							style={logModalStyles.closeButton}
							onPress={onClose}
						>
							<FontAwesome
								name="times"
								size={26}
							/>
						</TouchableOpacity>
						<View style={logModalStyles.modalContainer}>
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
						<View style={logModalStyles.button}>
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
