import React from 'react';
import Product from './Product/Product';

const Products = props => {
	return (
		<div className="products">
			<h2 className="products__category">Все товары</h2>
			<Product />
		</div>
	);
};

export default Products;
