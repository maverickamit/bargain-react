import React, { useState } from 'react';
import './Subscriptions.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Subscriptions.css';

const Subscriptions = () => {
	const [ show, toggleShow ] = useState(true);
	return (
		<Container>
			<Jumbotron>
				<Toast
					className="  justify-content-center align-items-center container"
					show={show}
					onClose={() => toggleShow(false)}
				>
					<Toast.Header style={{ 'text-align': 'center' }}>
						<strong className="mr-auto">Product Title</strong>
					</Toast.Header>
				</Toast>
			</Jumbotron>
		</Container>
	);
};
export default Subscriptions;
