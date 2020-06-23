// Libraries 
import React from 'react';
// Components
import MainNav from '../Nav/MainNav';
// Assets
import SubtractImage from '../../assets/images/Subtract.svg';
const Header = () => {
	return (
		<header id="home">
			<MainNav />
			<div className="header-info">
				<h1 className="header-info__h1">I'm Adan Constanzo!</h1>
				<h2 className="header-info__h2">Full-Stack Web Developer</h2>
			</div>
			<div id="arrow" className="arrow-down">
				<img src={SubtractImage} alt="Arrow down image button." height="50px" width="50px" />
			</div>
		</header>
	);
}

export default Header;