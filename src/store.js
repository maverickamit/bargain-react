import { observable, action, decorate } from 'mobx';

class ProductStore {
	productData = '';
	email = '';
	loading = false;

	setProductData(productData) {
		this.productData = productData;
	}

	setEmail(email) {
		this.email = email;
	}
	setLoading(loading) {
		this.loading = loading;
	}
}

ProductStore = decorate(ProductStore, {
	productData: observable,
	email: observable,
	loading: observable,
	setLoading: action,
	setProductData: action,
	setEmail: action
});

export { ProductStore };
