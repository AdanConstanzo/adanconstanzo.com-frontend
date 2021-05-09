import React from 'react';
import MainNav from '../Nav/MainNav';
import SubtractImage from '../../assets/images/Subtract.svg';
import { FormatUrlSrc } from '../../utils/index';

const Header = ({ homeHeader }) => (
	<header id="home" style={{ backgroundImage: `url(${FormatUrlSrc(homeHeader.coverImage.url)})` }}>
		<MainNav />
		<div className="header-info">
			<h1 className="header-info__h1">{homeHeader.name}</h1>
			<h2 className="header-info__h2">{homeHeader.title}</h2>
		</div>
		<div id="arrow" className="arrow-down">
			<img src={SubtractImage} alt="Arrow down button." height="50px" width="50px" />
		</div>
	</header>
)

export default Header;
