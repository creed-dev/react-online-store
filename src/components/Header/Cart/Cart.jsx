import React from 'react';
import cart from '../../../assets/img/cart.png';

const Cart = props => {
	return (
		<div className="cart">
			<button className="cart__btn">
				<img src={cart} alt="" className="cart__logo" />
			</button>
		</div>
	);
};

export default Cart;
