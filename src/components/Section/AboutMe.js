// Libraries
import React, { useEffect } from 'react';
// Scripts
import TerminalText from '../../scripts/TerminalText';
import SetNav from '../../scripts/nav';
// Utility
import { checkProjectScroll } from '../../scripts/utils';
// Component
const AboutMe = ({ homeAboutMe }) => {

	const imageOfMe = process.env.NODE_ENV !== "development"
		? homeAboutMe.imageOfMe.url
		: process.env.REACT_APP_BACKEND_URL + homeAboutMe.imageOfMe.url;
	
		// constant variables being used.
	const texts = ["Web Apps", "Game Dev", "App Dev", "Automation", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"];

	useEffect(() => {
		const terminalText = document.getElementById("terminal-text").children[0];
    // new terminal object.
    const textText1 = new TerminalText(texts, terminalText);
		const aboutMeEvent = { sectionId: 'about-me', blocksClass: 'about-me-hidden' }
		aboutMeEvent.func = checkProjectScroll(aboutMeEvent);
		aboutMeEvent.cb = textText1.typeAnimation;
		checkProjectScroll(aboutMeEvent)();
		window.addEventListener('scroll', aboutMeEvent.func);
		SetNav('about-me');
	});
	
	return (
		<section id="about-me" className="about-me__section bg-color-primary">
			<div className="about-me__img--div">
				<img className="about-me__img about-me-hidden"
					alt="Adan posing for the shot."
					data-animation='{ "animation": "animation-jump", "delayInit": false, "delayTime": 500 }'
					src={imageOfMe} />
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
					<p>@adan></p>
					<div id="terminal-text" className="terminal-text__typing"><span>life</span></div>
				</div>
			</div>
		</section>
	);
}
export default AboutMe;