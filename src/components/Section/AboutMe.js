// Libraries
import React from 'react';
// Components
import Section from './index';
// Assets
import Adan from '../../assets/images/adan-600-min.jpeg';
// Component
const AboutMe = () => (
	<Section id="about-me" class="about-me__section bg-color-primary">
		<div class="about-me__img--div">
			<img class="about-me__img about-me-hidden"
				data-animation='{ "animation": "animation-jump", "delayInit": false, "delayTime": 500 }'
				src={Adan} />
		</div>
		<div class="about-me color-primary-lightest about-me-hidden">
			<h2 class="about-me__h2 about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>About Me</h2>
			<p class="about-me__p about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>I’m a software
				engineer at Pint Inc where I focus both on front-end and back-end
				technologies! In addition to building websites I also enjoy making phone apps, video games and anything that
				comes to mind!</p>
			<h3 class="about-me__h3 about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>I'm Passionate About
			</h3>
			<div id="test" class="terminal-text about-me-hidden-div"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500, "terminalTextInit": true }'>
				<p>@adan></p>
				<div id="terminal-text" class="terminal-text__typing"><span>life</span></div>
			</div>
		</div>
	</Section>
)
export default AboutMe;