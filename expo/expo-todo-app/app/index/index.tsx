import React from 'react';
import ThemeToggle from '../../components/ThemeToggle';
import { View } from 'react-native';
import { useGlobalStyles } from '../../styles/global';
import TheText from '../../components/TheText';
import Container from '../../components/Container';

export default function Page() {
	const styles = useGlobalStyles();
	return (
		<Container>
			<View style={[styles.container]}>
				<View style={{ marginTop: 40, marginLeft: 10 }}>
					<TheText h4>hello world</TheText>
					<ThemeToggle />
				</View>
			</View>
		</Container>
	);
}
