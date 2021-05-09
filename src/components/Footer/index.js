import React from 'react';
import FooterIcon from './FooterIcon';

const HomeFooter = ( { footers } ) => (
	<footer id="contact" className="bg-color-primary-light">
		<h2 className="footer__h2 color-primary" data-animation='{ "animation": "animation-fadeIn", "delayInit": false }'>Contact Me!</h2>
		<div className="footer__icon__wrapper">
			{footers.map((footer, i) => <FooterIcon key={i} footer={footer} />)}
		</div>
	</footer>
);

const BlogFooter = ({ footers }) => (
	<footer id="contact" className="bg-color-primary-light">
		<h2 className="footer__h2 color-primary" >Check me out on the socials!</h2>
		<div className="footer__icon__wrapper">
			{footers.map((footer, i) => <FooterIcon key={i} footer={footer} />)}
		</div>
	</footer>
);

export {
	HomeFooter,
	BlogFooter
};