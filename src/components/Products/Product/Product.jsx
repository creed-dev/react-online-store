import React from 'react';
import iphoneXrImg from '../../../assets/img/product-iphone-xr/xr_black.jpg';

const Product = props => {
	return (
		<div className="products__list">
			<div className="product">
				<img className="product__img" src={iphoneXrImg} alt="iphone-xr" />
				<div className="product__name">iPhone XR</div>
				<div className="product__descr">64GB BLACK</div>
				<div className="product__count">39 990 Р</div>
				<button className="product__buy">купить</button>
			</div>
			<div className="product">
				<img className="product__img" src={iphoneXrImg} alt="iphone-xr" />
				<div className="product__name">iPhone XR</div>
				<div className="product__descr">64GB BLACK</div>
				<div className="product__count">39 990 Р</div>
				<button className="product__buy">купить</button>
			</div>
			<div className="product">
				<img className="product__img" src={iphoneXrImg} alt="iphone-xr" />
				<div className="product__name">iPhone XR</div>
				<div className="product__descr">64GB BLACK</div>
				<div className="product__count">39 990 Р</div>
				<button className="product__buy">купить</button>
			</div>
			<div className="product">
				<img className="product__img" src={iphoneXrImg} alt="iphone-xr" />
				<div className="product__name">iPhone XR</div>
				<div className="product__descr">64GB BLACK</div>
				<div className="product__count">39 990 Р</div>
				<button className="product__buy">купить</button>
			</div>
		</div>
	);
};

export default Product;
