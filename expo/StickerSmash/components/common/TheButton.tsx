import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, Pressable, GestureResponderEvent } from 'react-native';

export default function TheButton({
	label,
	type,
	onPress,
}: {
	label: string;
	type?: 'primary';
	onPress?: (event: GestureResponderEvent) => void;
}) {
	const isP = type && type === 'primary';

	return (
		<View style={styles.buttonContainer}>
			<Pressable style={[styles.button, { backgroundColor: isP ? '#fff' : 'auto' }]} onPress={onPress}>
				{isP && <FontAwesome name='picture-o' size={18} color='#25292e' style={styles.buttonIcon} />}
				<Text style={[styles.buttonLabel, { color: isP ? '#25292e' : '#fff' }]}>{label}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: 320,
		height: 68,
		marginHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 3,
	},
	button: {
		borderRadius: 10,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		borderColor: '#fff',
		borderWidth: 1,
	},
	buttonIcon: {
		paddingRight: 8,
	},
	buttonLabel: {
		color: '#fff',
		fontSize: 16,
	},
});
