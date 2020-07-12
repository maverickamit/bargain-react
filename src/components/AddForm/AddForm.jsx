import React, { useRef, useState } from 'react';
import './AddForm.css';
import { observer } from 'mobx-react';

import Axios from 'axios';

function AddForm({ productStore }) {
	const urlInput = useRef(null);

	const serverUrl = 'https://x25iuvslok.execute-api.ap-south-1.amazonaws.com/dev/api/bargains';

	const [ displaySuccess, setDisplaySuccess ] = useState(false);
	const [ displayError, setDisplayError ] = useState(false);

	const handleUrlSubmit = async (event) => {
		event.preventDefault();
		console.log(urlInput.current.value);
		await Axios({
			method: 'post',
			url: serverUrl,

			data: {
				email: productStore.email,
				productUrl: urlInput.current.value
			}
		})
			.then(function(response) {
				if (response.status === 200) {
					urlInput.current.value = '';
					setDisplaySuccess(true);
					setDisplayError(false);
				}
			})
			.catch(function(error) {
				setDisplayError(true);
				setDisplaySuccess(false);

				console.log(error);
			});
		await Axios.get(serverUrl, {
			params: {
				email: productStore.email
			}
		})
			.then(function(response) {
				if (response.data.length !== 0) {
					productStore.setProductData(response.data);
					productStore.setLoading(true);
				}
				console.log(response.data.length);
			})
			.catch(function(error) {
				console.log(error);
			})
			.then(
				setTimeout(() => {
					console.log('This will run after 5 second!');
					setDisplaySuccess(false);
					setDisplayError(false);
				}, 5000)
			);
	};

	return (
		<div>
			<div className=" d-flex justify-content-center align-items-center container">
				<form
					class="form-inline justify-center"
					onSubmit={(event) => {
						handleUrlSubmit(event);
					}}
				>
					<label class="sr-only" for="inlineFormInputName2">
						Name
					</label>
					<input
						ref={urlInput}
						type="text"
						class="form-control mb-2 mr-sm-2"
						id="inlineFormInputName2"
						placeholder="Enter product url"
					/>
					<button type="submit" class="btn btn-primary mb-2">
						Submit
					</button>
				</form>
			</div>

			<div
				class={displaySuccess & (productStore.email !== '') ? 'alert alert-success' : 'alert-none'}
				role="alert"
			>
				{displaySuccess & (productStore.email !== '') ? 'Product added successfully!' : ''}
			</div>
			<div class={displayError & (productStore.email !== '') ? 'alert alert-danger' : 'alert-none'} role="alert">
				{displayError & (productStore.email !== '') ? (
					'Error! Only Amazon.in and Flipkart.com Urls are supported.'
				) : (
					''
				)}
			</div>
			<div class={displayError & (productStore.email === '') ? 'alert alert-danger' : 'alert-none'} role="alert">
				{displayError & (productStore.email === '') ? 'Error! Please add email first.' : ''}
			</div>
		</div>
	);
}

export default observer(AddForm);
