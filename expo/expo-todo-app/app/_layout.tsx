import React from 'react';
import { Slot } from 'expo-router';
import { ThemeProvider, createTheme } from '@rneui/themed';

export default function Layout() {
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
