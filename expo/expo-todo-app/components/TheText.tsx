import { Text } from '@rneui/base';
import { useThemeMode } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

export default function TheText({
	children,
	h1 = false,
	h2 = false,
	h3 = false,
	h4 = false,
}: {
	children: any;
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
}) {
	const { mode } = useThemeMode();

	return (
		<View>
			<Text style={{ color: mode === 'dark' ? '#fff' : '#000' }} h1={h1} h2={h2} h3={h3} h4={h4}>
				{children}
			</Text>
		</View>
	);
}
