// Libraries
import React from 'react';

const FooterIcon = ( {footer} ) => {
	const icon = process.env.NODE_ENV !== "development"
		? footer.icon.url
		: process.env.REACT_APP_BACKEND_URL + footer.icon.url;
	return(
		<div>
			<a href={footer.link}>
				<img src={icon} alt="triangle with all three sides equal" height="50px" width="50px" />
				<br/>{footer.text}
			</a>
		</div>
	);
}

export default FooterIcon;