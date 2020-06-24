// Libraries 
import React, { useEffect } from 'react';
// Scripts
import SetNav from '../../scripts/nav';
// Components
import MainNav from '../Nav/MainNav';
//Utilities
import { smoothScroll } from '../../scripts/utils';
// Assets
import SubtractImage from '../../assets/images/Subtract.svg';
// Component
const Header = ({ homeHeader }) => {
	const coverImage = process.env.NODE_ENV !== "development"
		? homeHeader.coverImage.url
		: process.env.REACT_APP_BACKEND_URL + homeHeader.coverImage.url;
	useEffect(() => {
		const scrollButton = document.getElementById('arrow');
    SetNav();
    scrollButton.addEventListener('click', smoothScroll(document.getElementById('about-me')));
	});
	return (
		<header id="home" style={{ backgroundImage: `url(${coverImage})` }}>
			<MainNav />
			<div className="header-info">
				<h1 className="header-info__h1">{homeHeader.name}</h1>
				<h2 className="header-info__h2">{homeHeader.title}</h2>
			</div>
			<div id="arrow" className="arrow-down">
				<img src={SubtractImage} alt="Arrow down button." height="50px" width="50px" />
			</div>
		</header>
	);
}

export default Header;
