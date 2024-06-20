import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
	debug: {
		borderColor: 'yellow',
		borderWidth: 1,
	},
	container: {
		flex: 1,
	},
	textCenter: {
		textAlign: 'center',
	},
	text: {
		color: 'white',
	},
	textRed: {
		color: 'red',
	},
	textCyan: {
		color: 'cyan',
	},
	imageCenter: { resizeMode: 'contain', alignSelf: 'center' },
});
