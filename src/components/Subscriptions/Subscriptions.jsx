import React, { useState } from 'react';
import './Subscriptions.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import './Subscriptions.css';
import { observer } from 'mobx-react';


const Subscriptions = ({ productStore }) => {
	const [ show, toggleShow ] = useState(true);
 
	
	if (!productStore.loading) {
		return <></>
	}
	return (
		<Container>
			<Jumbotron>
				{productStore.productData.map((li, i) => {
					return (
						<Toast
							className="  justify-content-center align-items-center container"
							show={show}
							onClose={() => toggleShow(false)}
							key={i}
						>
							<Toast.Header style={{ 'text-align': 'center' }}>
								<strong className="mr-auto">Product Title</strong>
							</Toast.Header>
						</Toast>
					);
				})}
			</Jumbotron>
		</Container>
	);
};
export default observer(Subscriptions);
