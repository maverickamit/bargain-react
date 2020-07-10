import React from 'react';
import './AddForm.css';

function AddForm() {
	return (
		<form action="#">
			<h1>Fancy Inputs</h1>
			<div class="row">
				<input type="checkbox" name="fancy-checkbox" id="fancy-checkbox" />
				<label for="fancy-checkbox">Checkbox</label>
			</div>

			<div class="row">
				<input type="radio" name="fancy-radio" id="fancy-radio-1" />
				<label for="fancy-radio-1">Radio</label>

				<input type="radio" name="fancy-radio" id="fancy-radio-2" />
				<label for="fancy-radio-2">Radio</label>
			</div>

			<div class="row">
				<input type="text" name="fancy-text" id="fancy-text" />
				<label for="fancy-text">Name</label>
			</div>

			<div class="row">
				<textarea name="fancy-textarea" id="fancy-textarea" />
				<label for="fancy-textarea">Description</label>
			</div>

			<button type="submit" tabindex="0">
				Submit
			</button>
		</form>
	);
}

export default AddForm;
