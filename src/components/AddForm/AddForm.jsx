import React from 'react';
import './AddForm.css';

function AddForm() {
	return (
		<form action="#">
			<div class="row">
				<h5 style={{ paddingRight: '20px' }}>Toogle Subscription Alert</h5>
				<input type="checkbox" name="fancy-checkbox" id="fancy-checkbox" />
				<label for="fancy-checkbox">Checkbox</label>
			</div>
			<h5 class="text-help">Add Product</h5>

			<div class="row">
				<input type="text" name="fancy-text" id="fancy-text" />
				<label for="fancy-text">Url</label>
				<button type="submit" tabindex="0">
					Submit
				</button>
			</div>
		</form>
	);
}

export default AddForm;
