import React from 'react';
import { View } from 'react-native';
import Index from './pages/Index';
import { appStyles } from './AppStyles';

export default function App() {
	return (
		<View style={appStyles.container}>
			<Index />
		</View>
	);
}
