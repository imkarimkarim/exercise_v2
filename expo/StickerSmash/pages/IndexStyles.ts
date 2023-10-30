import { StyleSheet } from 'react-native';
import { commonStyles } from '../components/common/commonStyles';

export const indexStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageContainer: {
		flex: 1,
		paddingTop: 58,
		...commonStyles.imageCenter,
	},
	footerContainer: {
		flex: 1 / 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
