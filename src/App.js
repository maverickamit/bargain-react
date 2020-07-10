import React from 'react';
import AddForm from './components/AddForm/AddForm';
import Subscriptions from './components/Subscriptions/Subscriptions';
import './App.css';
import './components/AddForm/AddForm.css';

function App() {
	return (
		<div className="App">
			<h1> Price Tracker </h1>{' '}
			<form action="#">
				<h5 class="text-help"> Please enter your email here </h5>
				<div class="row">
					<input type="text" name="fancy-text" id="fancy-text" />
					<label for="fancy-text"> Email </label>{' '}
					<button type="submit" tabindex="0">
						Submit{' '}
					</button>{' '}
				</div>
			</form>{' '}
			<AddForm />
			<Subscriptions />
		</div>
	);
}

export default App;
