import React from 'react';
import { Slot } from 'expo-router';
import { ThemeProvider, createTheme, makeStyles, useThemeMode } from '@rneui/themed';
import { View } from 'react-native';

export default function Layout() {
	const { mode } = useThemeMode();
	console.log('🚀 - Layout - mode', mode);

	const theme = createTheme({
		lightColors: {},
		darkColors: {},
	});

	return (
		<ThemeProvider theme={theme}>
			<Slot />
		</ThemeProvider>
	);
}
