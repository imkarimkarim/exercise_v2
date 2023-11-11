import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { indexStyles } from './IndexStyles';
import TheImage from '../components/common/TheImage';
import TheButton from '../components/common/TheButton';
import * as ImagePicker from 'expo-image-picker';

export default function Index() {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImagePick = async ({ allowsEditing = false }) => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			quality: 1,
			allowsEditing,
		});

		// @ts-ignore (https://github.com/expo/expo/issues/20977#issuecomment-1544422682)
		delete result.cancelled;

		if (!result.canceled) {
			console.log(result);
			setSelectedImage(result.assets[0]);
		} else {
			console.log('client did not select any image.');
		}
	};

	return (
		<View style={indexStyles.container}>
			<View style={[indexStyles.imageContainer]}>
				<TheImage source={selectedImage} onPress={() => handleImagePick({})} />
			</View>
			<View style={[indexStyles.footerContainer]}>
				<TheButton
					type='primary'
					label='Choose a photo'
					onPress={() => handleImagePick({ allowsEditing: true })}
				/>
				{/* <TheButton
					label='Choose a photo'
					onPress={() => {
						alert('mmd did say hi! 👋🏽');
					}}
				/> */}
				<TheButton label='clear' onPress={() => setSelectedImage(null)} />
			</View>
			<StatusBar style='light' />
		</View>
	);
}
