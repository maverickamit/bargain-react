import React from 'react';
import './Subscriptions.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import './Subscriptions.css';
import { observer } from 'mobx-react';
import Axios from 'axios';
import serverUrl from '../urls';

const Subscriptions = ({ productStore }) => {
	const deleteProduct = async (bargainId) => {
		await Axios.delete(`${serverUrl}/${bargainId}`);
		await Axios.get(serverUrl, {
			params: {
				email: productStore.email
			}
		})
			.then(function(response) {
				if (response.data.length !== 0) {
					productStore.setProductData(response.data);
					productStore.setShowProduct(true);
				} else {
					productStore.setShowProduct(true);
					productStore.setProductData('');
				}
				console.log(response.data.length);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	console.log(productStore.productData === '');

	if (!productStore.showProduct) {
		return '';
	}

	if (productStore.productData === '') {
		return (
			<div class="alert alert-warning" role="alert">
				You haven't added any products yet!
			</div>
		);
	}
	return (
		<Container>
			<Jumbotron>
				{productStore.productData.map((item, i) => {
					return (
						<Toast
							className="  d-flex justify-content-center align-items-center container"
							show={true}
							onClose={(e) => {
								deleteProduct(item.bargainId);
							}}
							key={i}
						>
							<Toast.Header>
								<a href={item.productUrl} rel="noopener noreferrer" target="_blank">
									<strong>{item.productTitle}</strong>
								</a>
							</Toast.Header>
						</Toast>
					);
				})}
			</Jumbotron>
		</Container>
	);
};
export default observer(Subscriptions);
