import React from 'react';
import './MessageForm.css';

function MessageForm({ onMessageSend }) {
	const [text, setText] = React.useState('');

	async function handleFormSubmit(event) {
		event.preventDefault();
		if (text === '' || text === ' ') return;
		setText('');
		onMessageSend({ me: true, body: text });
		await fetch('http://localhost:3001/message/' + text)
			.then((res) => res.json())
			.then((data) => {
				onMessageSend({ me: false, body: data.message });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<form className='MessageForm' onSubmit={handleFormSubmit} data-testid='submit-message'>
			<div className='input-container'>
				<input
					data-testid='input-message'
					type='text'
					placeholder='پیام خود را اینجا بنویسید...'
					autoFocus
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className='button-container'>
				<button type='submit'>ارسال</button>
			</div>
		</form>
	);
}

export default MessageForm;
