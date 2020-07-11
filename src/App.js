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
			<h1 style={{ padding: '20px' }}> Price Tracker </h1>
			<div className=" d-flex justify-content-center align-items-center container">
				<form
					class="form-inline justify-center"
					onSubmit={(event) => {
						handleEmailSubmit(event);
					}}
					style={{ padding: '10px' }}
				>
					<label class="sr-only" for="inlineFormInputName2">
						Name
					</label>
					<input
						ref={textInput}
						type="text"
						class="form-control mb-2 mr-sm-2"
						id="inlineFormInputName2"
						placeholder="Enter email"
					/>
					<button type="submit" class="btn btn-primary mb-2">
						Submit
					</button>
				</form>
			</div>
			<AddForm email={email} />
			<Subscriptions email={email} />
		</div>
	);
}

export default App;
