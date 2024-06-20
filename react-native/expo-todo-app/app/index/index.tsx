import React from 'react';
import ThemeToggle from '../../components/ThemeToggle';
import { View } from 'react-native';
import { useGlobalStyles } from '../../styles/global';
import Container from '../../components/Container';
import { Button, Icon, Input, Text } from '@rneui/themed';
import Space from '../../components/Space';

export default function Page() {
	const styles = useGlobalStyles();
	const input = React.createRef<any>();
	return (
		<Container>
			<View style={[styles.container]}>
				<View style={{ marginRight: 20, marginTop: 40, alignItems: 'flex-end' }}>
					<ThemeToggle />
				</View>
				<Space />
				<View
					style={[
						{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
						},
					]}>
					<Input
						leftIcon={<Icon style={{ opacity: 0.4 }} size={20} type='feather' name='edit-2' />}
						containerStyle={[{ width: '70%' }]}
						placeholder='new todo...'
						ref={input}
					/>
					<Button onPress={() => {}}>
						<Icon name='add' type='ionicon' />
					</Button>
				</View>
				<Space />
				<View
					style={[
						{
							display: 'flex',
							alignItems: 'center',
						},
					]}>
					{/* <Input containerStyle={[{ width: '70%' }]} placeholder='new todo...' ref={input} />
					<Button onPress={() => {}}>
						<Icon name='add' type='ionicon' />
					</Button> */}
					{[1, 2, 3, 4].map((va: any) => {
						return <Text key={va}>{va}</Text>;
					})}
				</View>
			</View>
		</Container>
	);
}
