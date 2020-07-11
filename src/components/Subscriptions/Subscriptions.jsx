import React, { useState } from 'react';
import './Subscriptions.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import './Subscriptions.css';
import { observer } from 'mobx-react';
import Axios from 'axios';
import serverUrl from '../urls';

const Subscriptions = ({ productStore }) => {
	const deleteProduct = (bargainId) => {
		Axios.delete(`${serverUrl}/${bargainId}`);
	};

	if (!productStore.loading) {
		return '';
	}
	return (
		<Container>
			<Jumbotron>
				{productStore.productData.map((item, i) => {
					return (
						<Toast
							className="  d-flex justify-content-center align-items-center container"
							show={true}
							onClose={() => deleteProduct(item.bargainId)}
							key={i}
						>
							<Toast.Header>
								<strong>{item.productTitle}</strong>
							</Toast.Header>
						</Toast>
					);
				})}
			</Jumbotron>
		</Container>
	);
};
export default observer(Subscriptions);
