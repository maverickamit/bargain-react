import { observable, action, decorate } from 'mobx';

class ProductStore {
	productData = '';
	email = '';
	showProduct = false;
	fetchingItems = false;
	fetchingProduct = false;

	setProductData(productData) {
		this.productData = productData;
	}

	setEmail(email) {
		this.email = email;
	}
	setShowProduct(showProduct) {
		this.showProduct = showProduct;
	}
	setFetchingItems(fetchingItems) {
		this.fetchingItems = fetchingItems;
	}
	setFetchingProduct(fetchingProduct) {
		this.fetchingProduct = fetchingProduct;
	}
}

ProductStore = decorate(ProductStore, {
	productData: observable,
	email: observable,
	showProduct: observable,
	fetchingItems: observable,
	fetchingProduct: observable,
	setFetchingItems: action,
	setFetchingProduct: action,
	setShowProduct: action,
	setProductData: action,
	setEmail: action
});

export { ProductStore };
