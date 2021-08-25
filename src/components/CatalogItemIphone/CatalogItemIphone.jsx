import React from 'react';
import { Link } from 'react-router-dom';

const CatalogItemIphone = props => {
	return (
		<Link className="catalog-item" to={props.link}>
			<img src={props.imgUrl} alt="" className="catalog-item__img" />
			<div className="catalog-item__name">{props.name}</div>
		</Link>
	);
};

export default CatalogItemIphone;
