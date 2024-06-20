import { makeStyles } from '@rneui/themed';

export const useGlobalStyles = makeStyles((theme) => ({
	container: {
		flex: 12,
		display: 'flex',
	},
	f1: {
		flex: 1,
	},
	button: {
		width: 40,
	},
	d: {
		borderColor: 'yellow',
		borderWidth: 1,
	},
}));
