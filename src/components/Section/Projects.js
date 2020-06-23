// Libraries
import React from 'react';
// Component
const Projects = () => (
	<section id="projects" className="bg-color-primary-light">
		<h2 className="projects__h2 color-primary projects-hidden"
			data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayTime": 250 }'>Check Out Some Of My
			Projects</h2>
		<div className="projects__wrapper projects-hidden">
			<div className="projects-hidden-div"
				data-modal="pokemon"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 350 }'>
				<img src="assets/images/pokeball-min.png" alt="GottaTCG" />
			</div>
			<div className="projects-hidden-div"
				data-modal="jello"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 350 }'>
				<img src="assets/images/Jello-min.png" alt="Jello Hackathon" />
			</div>
			<div className="projects-hidden-div"
				data-modal="dijkstra"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 350 }'>
				<img src="assets/images/airplane-min.png" alt="Dijkstra Algorithm" />
			</div>
			<div className="projects-hidden-div"
				data-modal="song"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 350 }'>
				<img src="assets/images/song-game-2-512-min.png" alt="Song App" />
			</div>
		</div>
	</section>
)

export default Projects;