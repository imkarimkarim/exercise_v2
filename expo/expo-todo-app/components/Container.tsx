import { useTheme, useThemeMode } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

export default function Container({ children }: any) {
	const { theme } = useTheme();
	const { mode } = useThemeMode();

	return (
		<View style={[{ backgroundColor: theme.colors.background, flex: 1 }]}>
			{children}
			<StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
		</View>
	);
}
