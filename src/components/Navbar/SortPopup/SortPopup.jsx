import React, { useEffect, useRef, useState } from 'react';

const SortPopup = props => {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const sortPopupRef = useRef();
	const [activeItem, setActiveItem] = useState(0);
	useEffect(() => {
		document.body.addEventListener('click', outsideClick);
	}, []);

	const outsideClick = e => {
		if (!e.path.includes(sortPopupRef.current)) {
			setVisiblePopup(false);
		}
	};
	const toggleVisiblePopup = () => {
		setVisiblePopup(!visiblePopup);
	};

	const changeActiveItem = index => {
		setActiveItem(index);
		setVisiblePopup(false);
	};

	return (
		<div ref={sortPopupRef} className="sort-popup">
			<div onClick={toggleVisiblePopup} className="sort-popup__header">
				Сортировать по <i>{props.items[activeItem]}</i>
			</div>
			{visiblePopup && (
				<ul className="sort-popup__list">
					{props.items &&
						props.items.map((name, index) => {
							return (
								<li
									key={`${name}_${index}`}
									className={
										activeItem === index
											? 'sort-popup__list-item sort-popup__list-item_active'
											: 'sort-popup__list-item'
									}
									onClick={() => changeActiveItem(index)}
								>
									{name}
								</li>
							);
						})}
				</ul>
			)}
		</div>
	);
};

export default SortPopup;
