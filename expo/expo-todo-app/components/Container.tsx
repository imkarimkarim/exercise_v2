import { useTheme } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

export default function Container({ children }: any) {
	const { theme } = useTheme();

	return <View style={[{ backgroundColor: theme.colors.background, flex: 1 }]}>{children}</View>;
}
