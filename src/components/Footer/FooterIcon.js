import React from 'react';
import { FormatUrlSrc } from '../../utils/index';

const FooterIcon = ({ footer }) => (
	<div>
		<a href={footer.link}>
			<img src={FormatUrlSrc(footer.icon.url)} alt="triangle with all three sides equal" height="50px" width="50px" />
			<br/>{footer.text}
		</a>
	</div>
);

export default FooterIcon;