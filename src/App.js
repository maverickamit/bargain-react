import React, { useState, useRef } from 'react';
import AddForm from './components/AddForm/AddForm';
import Subscriptions from './components/Subscriptions/Subscriptions';
import './App.css';
import './components/AddForm/AddForm.css';
import Axios from 'axios';
import serverUrl from './components/urls';
import { observer } from 'mobx-react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function App({ productStore }) {
	const textInput = useRef(null);
	const [ loadingData, setLoadingData ] = useState(false);

	const handleEmailSubmit = (event) => {
		event.preventDefault();
		productStore.setEmail(textInput.current.value);
		setLoadingData(true);
		Axios.get(serverUrl, {
			params: {
				email: textInput.current.value
			}
		})
			.then(function(response) {
				if (response.data.length !== 0) {
					productStore.setProductData(response.data);
					productStore.setShowProduct(true);
				} else {
					productStore.setProductData('');

					productStore.setShowProduct(true);
				}

				console.log(response.data.length);
			})
			.catch(function(error) {
				console.log(error);
			})
			.then(() => {
				setLoadingData(false);
			});
	};

	return (
		<div className="App container">
			<h1 style={{ padding: '2px' }}> Bargain </h1>
			<h3 style={{ padding: '2px' }}>
				<small class="text-muted">Track prices and get alerts on your email</small>
			</h3>
			<div style={{ paddingTop: '20px' }} className="d-flex justify-content-center align-items-center container">
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
						type="email"
						class="form-control mb-2 mr-sm-2"
						id="inlineFormInputName2"
						placeholder="Enter email"
						required
					/>

					{loadingData ? (
						<Button style={{ margin: '0 10px 10px 10px' }} variant="primary" disabled>
							<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
							Loading...
						</Button>
					) : (
						<button type="submit" class="btn btn-primary mb-2">
							Submit
						</button>
					)}
				</form>
			</div>
			<AddForm productStore={productStore} />
			<Subscriptions productStore={productStore} />
		</div>
	);
}

export default observer(App);
