import React from 'react';
import FooterIcon from './FooterIcon';
import FOOTER_QUERY from "../../queries/footer"
import Query from "../Query";

const HomeFooter = ( { footers } ) => (
	<footer id="contact" className="bg-color-primary-light">
		<h2 className="footer__h2 color-primary" data-animation='{ "animation": "animation-fadeIn", "delayInit": false }'>Contact Me!</h2>
		<div className="footer__icon__wrapper">
			{footers.map((footer, i) => <FooterIcon key={i} footer={footer} />)}
		</div>
	</footer>
);

const BlogFooterComponent = ({ footers }) => (
	<footer id="contact" className="bg-color-primary-light">
		<h2 className="footer__h2 color-primary" >Check me out on the socials!</h2>
		<div className="footer__icon__wrapper">
			{footers.map((footer, i) => <FooterIcon key={i} footer={footer} />)}
		</div>
	</footer>
);

const BlogFooter = (className="bg-color-primary") => (
	<Query query={FOOTER_QUERY}>
		{({ data: { footers } }) =>
		<div className={className}>
			<BlogFooterComponent footers={footers} />
		</div>}
	</Query>
)




export {
	HomeFooter,
	BlogFooter
};