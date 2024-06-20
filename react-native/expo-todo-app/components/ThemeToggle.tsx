import React from 'react';
import { View } from 'react-native';
import { Button, Icon, useThemeMode } from '@rneui/themed';
import { useGlobalStyles } from '../styles/global';

export default function ThemeToggle() {
	const styles = useGlobalStyles();
	const { setMode, mode } = useThemeMode();
	const handleOnPress = () => {
		setMode(mode === 'dark' ? 'light' : 'dark');
	};

	return (
		<>
			<View style={styles.button}>
				<Button onPress={handleOnPress}>
					<Icon name={mode === 'dark' ? 'moon' : 'sun'} type='feather' />
				</Button>
			</View>
		</>
	);
}
