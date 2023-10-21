import React from 'react';
import { View } from 'react-native';

import Index from './pages/Index';

export default function App() {
	return (
		<View className='flex-1 justify-center items-center bg-white'>
			<Index />
		</View>
	);
}
