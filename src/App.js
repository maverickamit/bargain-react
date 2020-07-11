import React, { useState, useRef } from 'react';
import AddForm from './components/AddForm/AddForm';
import Subscriptions from './components/Subscriptions/Subscriptions';
import './App.css';
import './components/AddForm/AddForm.css';

function App() {
	const [ email, setEmail ] = useState('amit');
	const textInput = useRef(null);

	const handleEmailSubmit = (event) => {
		event.preventDefault();
		setEmail(textInput.current.value);
		console.log(email);
	};

	return (
		<div className="App">
			<h1> Price Tracker </h1>
			<form
				onSubmit={(event) => {
					handleEmailSubmit(event);
				}}
			>
				<h5 class="text-help"> Please enter your email here </h5>
				<div class="row">
					<input type="text" name="email" id="email" ref={textInput} />
					<label for="email"> Email </label>
					<button type="submit" tabindex="0">
						Submit
					</button>
				</div>
			</form>
			<AddForm email={email} />
			<Subscriptions email={email} />
		</div>
	);
}

export default App;
