import React from 'react';
import MessageForm from '../components/MessageForm/MessageForm';
import MessageList from '../components/MessageList/MessageList';
import './App.css';

function App() {
	const [messages, setMessages] = React.useState([]);

	React.useEffect(() => {
		console.log('🚀 - App - messages', messages);
	}, [messages]);

	return (
		<div className='App'>
			<MessageList messages={messages} />
			<MessageForm
				onMessageSend={(newMessage) => {
					let tmp = messages;
					tmp.push(newMessage);
					setMessages([...tmp]);
				}}
			/>
		</div>
	);
}

export default App;
