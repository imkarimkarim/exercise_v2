import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, Pressable, GestureResponderEvent } from 'react-native';

export default function TheButton({
	label,
	type,
	onPress,
	iconName,
}: {
	label: string;
	type?: 'primary';
	onPress?: (event: GestureResponderEvent) => void;
	iconName?: string | any;
}) {
	const isP = type && type === 'primary';

	return (
		<View style={styles.buttonContainer}>
			<Pressable style={[styles.button, { backgroundColor: isP ? '#fff' : 'auto' }]} onPress={onPress}>
				{iconName && <FontAwesome name={iconName} size={18} color='#25292e' style={styles.buttonIcon} />}
				<Text style={[styles.buttonLabel, { color: isP ? '#25292e' : '#fff' }]}>{label}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
	},
	button: {
		borderRadius: 10,
		padding: 20,
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
