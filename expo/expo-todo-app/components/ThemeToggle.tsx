import React from 'react';
import { View } from 'react-native';
import { Button, useThemeMode } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
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
				<Button onPress={handleOnPress}>change</Button>
			</View>
			<StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
		</>
	);
}
