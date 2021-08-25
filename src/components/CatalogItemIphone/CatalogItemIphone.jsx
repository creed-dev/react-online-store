import React from 'react';

const CatalogItemIphone = props => {
	return (
		<div className="catalog-item">
			<img src={props.imgUrl} alt="" className="catalog-item__img" />
			<div className="catalog-item__name">{props.name}</div>
		</div>
	);
};

export default CatalogItemIphone;
