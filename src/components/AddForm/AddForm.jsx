import React, { useRef } from 'react';
import './AddForm.css';
const axios = require('axios').default;

function AddForm(email) {
	const urlInput = useRef(null);

	const serverUrl = 'https://x25iuvslok.execute-api.ap-south-1.amazonaws.com/dev/api/bargains';

	const handleUrlSubmit = (event) => {
		event.preventDefault();
		console.log(urlInput.current.value);
		axios({
			method: 'post',
			url: serverUrl,
			data: {
				email: email.email,
				productUrl: urlInput.current.value
			}
		})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	return (
		<form
			onSubmit={(event) => {
				handleUrlSubmit(event);
			}}
		>
			<div class="row">
				<h5 style={{ paddingRight: '20px' }}>Toogle Subscription Alert</h5>
				<input type="checkbox" name="fancy-checkbox" id="fancy-checkbox" />
				<label for="fancy-checkbox">Checkbox</label>
			</div>
			<h5 class="text-help">Add Product</h5>

			<div class="row">
				<input type="text" name="product-url" id="product-url" ref={urlInput} />
				<label for="product-url">Url</label>
				<button type="submit" tabindex="0">
					Submit
				</button>
			</div>
		</form>
	);
}

export default AddForm;
