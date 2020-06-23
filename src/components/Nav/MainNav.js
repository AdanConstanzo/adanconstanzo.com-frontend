import React from 'react';

const MainNav = () => {
	return (
		<React.Fragment>
			<div id="mobile-nav-block"></div>
			<div id="hamburger" data-open="false" className="hamburger">
				<div></div>
				<div></div>
			</div>
			<nav id="nav">
				<ul>
					<li id="about-me-li" data-ref="about-me" >About Me</li>
					<li id="projects-li" data-ref="projects" >Projects</li>
					<li id="blogs-li" data-ref="blogs" >Blogs</li>
					<li id="contact-li" data-ref="contact" >Contact</li>
				</ul>
			</nav>
		</React.Fragment>
	)
}

export default MainNav