import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { indexStyles } from './IndexStyles';
import TheImage from '../components/common/TheImage';
import TheButton from '../components/common/TheButton';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import * as MediaLibrary from 'expo-media-library';

export default function Index() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [showEditOptions, setShowEditOptions] = useState(false);

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

	const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
	// const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

	// console.log('🚀 - Index - permissionResponse', permissionResponse);
	// useEffect(() => {
	// 	if (!permissionResponse || !permissionResponse.granted) {
	// 		requestPermission();
	// 	}
	// }, [permissionResponse]);

	// MediaLibrary.getAlbumsAsync().then((mmd: any) => {
	// 	console.log('mmd');
	// 	// mmd.forEach((element) => {
	// 	// 	console.log(element.title);
	// 	// });
	// 	const tmp = mmd.filter((m: any) => m.title.includes('NEW'));
	// 	console.log('🚀 - MediaLibrary.getAlbumsAsync - tmp', tmp[0].id);
	// 	MediaLibrary.getAssetInfoAsync(tmp[0].id).then((val: any) => {
	// 		console.log(val);
	// 	});
	// });

	useEffect(() => {
		console.log('🚀 - Index - status', status);
		if (!status || !status.granted) {
			requestPermission().then((value: any) => {
				console.log(value);
			});
		}
	}, [status]);

	return (
		<View style={indexStyles.container}>
			{!showEditOptions ? (
				<>
					<View style={[indexStyles.imageContainer]}>
						<TheImage source={selectedImage} onPress={() => handleImagePick({})} />
					</View>
					<View style={[indexStyles.footerContainer]}>
						<TheButton
							type='primary'
							label='Choose a photo'
							onPress={() => handleImagePick({ allowsEditing: true })}
						/>
					</View>
				</>
			) : (
				<>edit options</>
			)}

			<StatusBar style='light' />
		</View>
	);
}
