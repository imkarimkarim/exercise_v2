import React from 'react';
import { GestureResponderEvent, Image, ImageSourcePropType, ImageStyle, Pressable, StyleSheet } from 'react-native';

export default function TheImage({
	source,
	style,
	onPress,
}: {
	source: ImageSourcePropType;
	style?: ImageStyle;
	onPress?: (event: GestureResponderEvent) => void;
}) {
	return (
		<Pressable onPress={onPress}>
			<Image source={source} style={[styles.image, style]} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
		// borderColor: 'yellow',
		// borderWidth: 1,
	},
});
