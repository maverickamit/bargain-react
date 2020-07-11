import React, { useRef, useState } from 'react';
import './AddForm.css';
import { observer } from 'mobx-react';

const axios = require('axios').default;

function AddForm({ productStore }) {
	const urlInput = useRef(null);

	const serverUrl = 'https://x25iuvslok.execute-api.ap-south-1.amazonaws.com/dev/api/bargains';

	const [ displaySuccess, setDisplaySuccess ] = useState(false);
	const [ displayError, setDisplayError ] = useState(false);

	const handleUrlSubmit = (event) => {
		event.preventDefault();
		console.log(urlInput.current.value);
		axios({
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
			<div class={displaySuccess ? 'alert alert-success' : 'alert-none'} role="alert">
				{displaySuccess ? 'Success!' : ''}
			</div>
			<div class={displayError ? 'alert alert-danger' : 'alert-none'} role="alert">
				{displayError ? 'Error!' : ''}
			</div>
		</div>
	);
}

export default observer(AddForm);
