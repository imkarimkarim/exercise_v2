import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { indexStyles } from './IndexStyles';
import TheImage from '../components/common/TheImage';
import TheButton from '../components/common/TheButton';
import * as ImagePicker from 'expo-image-picker';
import EmojiPickerModal from '../components/EmojiPickerModal';
import EmojiList from '../components/EmojiList';

export default function Index() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [showEditOptions, setShowEditOptions] = useState(false);
	const [showEmojiPickerModal, setShowEmojiPickerModal] = useState(false);
	const [pickedEmoji, setPickedEmoji] = useState(null);

	// NOTE
	// expo go has limited memory stack(you can import big files at eas build)
	// expo go also has a bug at loading the first image that will be solved soon
	// and Expo ImagePicker is not supporting all albums access yet(https://www.reddit.com/r/reactnative/comments/17svot0/expo_imagepicker_is_not_showing_all_the_albums_in/)
	const handleImagePick = async ({ allowsEditing = false }) => {
		ImagePicker.requestMediaLibraryPermissionsAsync();
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
			setShowEditOptions(true);
		} else {
			console.log('client did not select any image.');
		}
	};

	return (
		<>
			<View style={indexStyles.container}>
				<>
					<View style={[indexStyles.imageContainer]}>
						<TheImage source={selectedImage} onPress={() => handleImagePick({})} />
					</View>
					<View style={[indexStyles.footerContainer]}>
						{!showEditOptions ? (
							<TheButton
								type='primary'
								label='Choose a photo'
								iconName={'picture-o'}
								onPress={() => handleImagePick({ allowsEditing: true })}
							/>
						) : (
							// TODO add styles and icons
							<View style={{ display: 'flex', flexDirection: 'row' }}>
								<TheButton
									label='Reset'
									onPress={() => {
										setSelectedImage(null);
										setShowEditOptions(false);
									}}
								/>
								<TheButton
									type='primary'
									label='      +      '
									onPress={() => setShowEmojiPickerModal(true)}
								/>
								<TheButton label='Save' />
							</View>
						)}
					</View>
				</>
				<EmojiPickerModal show={showEmojiPickerModal} onClose={() => setShowEmojiPickerModal(false)}>
					<EmojiList onSelect={setPickedEmoji} onCloseModal={() => setShowEmojiPickerModal(false)} />
				</EmojiPickerModal>
				<StatusBar style='auto' />
			</View>
		</>
	);
}
