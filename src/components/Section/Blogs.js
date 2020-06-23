// Libraries
import React from 'react';
import FEWW from '../../assets/images/the-feww.png';
import AndroidImage from '../../assets/images/android-min.jpg';
// Component
const Blogs = () => (
	<section id="blogs" class="content bg-color-primary blogs">
		<h2 class="blogs__h2 color-primary-light blogs-hidden" data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayTime": 250 }'>Check Out Some Of My Blogs</h2>
		<div class="grid blogs-hidden">
			<figure class="effect-sadie blogs-hidden-div" data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>
				<img src={FEWW} alt="the f.e.w.w." />
				<figcaption>
					<h2>Senior Design Project:<br/><span>The F.E.W.W</span></h2>
					<p>My CSULA Senior Design Project: The F.E.W.W</p>
					<a href="http://blog.adanconstanzo.com/blog/sdp_the_feww" target="_blank" >View more</a>
				</figcaption>
			</figure>
			<figure class="effect-sadie blogs-hidden-div" data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 500 }'>
				<img src={AndroidImage} alt="img14" />
				<figcaption>
					<h2>Android App Development<br/><span>Never Have I Ever</span></h2>
					<p>Learning android development!</p>
					<a href="http://blog.adanconstanzo.com/blog/neverhaveiever" target="_blank" >View more</a>
				</figcaption>
			</figure>
		</div>
	</section>
);

export default Blogs;