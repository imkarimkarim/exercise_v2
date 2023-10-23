import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { indexStyles } from './IndexStyles';
import TheImage from '../components/common/TheImage';
import TheButton from '../components/common/TheButton';
import * as ImagePicker from 'expo-image-picker';
const placeholderImage = require('../assets/images/background-image.png');

export default function Index() {
	const [selectedImage, setSelectedImage] = useState(null);
	const handleImagePick = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			quality: 1,
		});

		// @ts-ignore (https://github.com/expo/expo/issues/20977#issuecomment-1544422682)
		delete result.cancelled;

		if (!result.canceled) {
			console.log(result);
			setSelectedImage(result.assets[0].uri);
		} else {
			alert('You did not select any image.');
		}
	};
	return (
		<View style={indexStyles.container}>
			<View style={[indexStyles.imageContainer]}>
				<TheImage
					source={selectedImage ? { uri: selectedImage } : placeholderImage}
					onPress={handleImagePick}
				/>
			</View>
			<View style={[indexStyles.footerContainer]}>
				<TheButton type='primary' label='Choose a photo' onPress={handleImagePick} />
				<TheButton
					label='Choose a photo'
					onPress={() => {
						alert('mmd did say hi! 👋🏽');
					}}
				/>
			</View>
			<StatusBar style='light' />
		</View>
	);
}
