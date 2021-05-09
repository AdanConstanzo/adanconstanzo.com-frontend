import React from 'react';
import { FormatUrlSrc } from '../../utils/index';

const AboutMe = ({ homeAboutMe }) => (
	<section id="about-me" className="about-me__section bg-color-primary">
		<div className="about-me__img--div">
			<img className="about-me__img about-me-hidden"
				alt="Adan posing for the shot."
				data-animation='{ "animation": "animation-jump", "delayInit": false, "delayTime": 500 }'
				src={FormatUrlSrc(homeAboutMe.imageOfMe.url)} />
		</div>
		<div className="about-me color-primary-lightest about-me-hidden">
			<h2 className="about-me__h2 about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>{homeAboutMe.header}</h2>
			<p className="about-me__p about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>{homeAboutMe.description}</p>
			<h3 className="about-me__h3 about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>{homeAboutMe.subHeader}</h3>
			<div id="test" className="terminal-text about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500, "terminalTextInit": true }'>
				<p>@adan&gt;</p>
				<div id="terminal-text" className="terminal-text__typing"><span>life</span></div>
			</div>
		</div>
	</section>
);

export default AboutMe;