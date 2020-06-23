// Libraries
import React from 'react';
// Assets
import Adan from '../../assets/images/adan-600-min.jpeg';
// Component
const AboutMe = () => (
	<section id="about-me" className="about-me__section bg-color-primary">
		<div className="about-me__img--div">
			<img className="about-me__img about-me-hidden"
				data-animation='{ "animation": "animation-jump", "delayInit": false, "delayTime": 500 }'
				src={Adan} />
		</div>
		<div className="about-me color-primary-lightest about-me-hidden">
			<h2 className="about-me__h2 about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>About Me</h2>
			<p className="about-me__p about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>I’m a software
				engineer at Pint Inc where I focus both on front-end and back-end
				technologies! In addition to building websites I also enjoy making phone apps, video games and anything that
				comes to mind!</p>
			<h3 className="about-me__h3 about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>I'm Passionate About
			</h3>
			<div id="test" className="terminal-text about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500, "terminalTextInit": true }'>
				<p>@adan></p>
				<div id="terminal-text" className="terminal-text__typing"><span>life</span></div>
			</div>
		</div>
	</section>
)
export default AboutMe;