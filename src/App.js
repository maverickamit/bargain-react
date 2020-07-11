import React, { useState, useRef } from 'react';
import AddForm from './components/AddForm/AddForm';
import Subscriptions from './components/Subscriptions/Subscriptions';
import './App.css';
import './components/AddForm/AddForm.css';
import Axios from 'axios';
import serverUrl from './components/urls';
import { observer } from 'mobx-react';

function App({ productStore }) {
	const textInput = useRef(null);

	const handleEmailSubmit = (event) => {
		event.preventDefault();
		productStore.setEmail(textInput.current.value);
		Axios.get(serverUrl, {
			params: {
				email: textInput.current.value
			}
		})
			.then(function(response) {
				if (response.data.length != 0) {
					productStore.setProductData(response.data);
					productStore.setLoading(true);
				} else {
					productStore.setLoading(false);
				}
				console.log(response.data.length);
			})
			.catch(function(error) {
				console.log(error);
			});
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
			<AddForm productStore={productStore} />
			<Subscriptions productStore={productStore} />
		</div>
	);
}

export default observer(App);
