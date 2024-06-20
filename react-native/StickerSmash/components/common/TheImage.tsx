import { Image } from 'expo-image';
import { ImagePickerAsset } from 'expo-image-picker';
import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';

const placeholderImage = require('../../assets/images/background-image.png');

export default function TheImage({
	source,
	onPress,
}: {
	source: ImagePickerAsset;
	onPress?: (event: GestureResponderEvent) => void;
}) {
	return (
		<Pressable onPress={onPress}>
			<View style={[styles.container]}>
				<Image
					source={source?.uri}
					style={[
						styles.image,
						{
							width: source?.width || 356,
							height: source?.height || 522,
						},
					]}
					contentFit='contain'
					placeholder={placeholderImage}
				/>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		flex: 1,
		width: '100%',
	},
});
