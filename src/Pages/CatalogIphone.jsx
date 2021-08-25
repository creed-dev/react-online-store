import React from 'react';
import CatalogItemIphone from '../components/CatalogItemIphone/CatalogItemIphone';

const ProductsIphone = props => {
	return (
		<div className="catalog">
			<h2 className="catalog__category">iPhone</h2>
			<div className="catalog__list">
				{props.iphones.map((obj, index) => {
					return (
						<CatalogItemIphone
							key={`${obj}_${index}`}
							name={obj.name}
							imgUrl={obj.imgUrl}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProductsIphone;
