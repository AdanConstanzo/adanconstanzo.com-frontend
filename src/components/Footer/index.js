// Libraries
import React, { useEffect } from 'react';
// Scripts
import SetNav from '../../scripts/nav';
// Components
import FooterIcon from './FooterIcon';
// Component
const Footer = ( { footers } ) => {
	
	useEffect(() => {
		SetNav('contact');
	});
	return (
		<footer id="contact" className="bg-color-primary-light">
			<h2 className="footer__h2 color-primary" data-animation='{ "animation": "animation-fadeIn", "delayInit": false }'>Contact Me!</h2>
			<div className="footer__icon__wrapper">
				{footers.map((footer, i) => <FooterIcon key={i} footer={footer} />)}
			</div>
		</footer>
	);
}

export default Footer;