// Libraries
import React, { useEffect } from 'react';
// Components
import ProjectIcon from '../ProjectModal/ProjectIcon';
import ProjectModal from '../ProjectModal';
// Utility 
import { checkProjectScroll } from '../../scripts/utils';
// Scripts
import SetModal from '../../scripts/modal';
// Component
/*
<Query query={ARTICLES_QUERY}>
	{({ data: { articles } }) => {
		return <Articles articles={articles} />;
	}}
</Query>
*/
const Projects = ({ projects }) => {
	
	useEffect(() => {
		const projectScrollEvent = { sectionId: 'projects', blocksClass: 'projects-hidden' }
		projectScrollEvent.func = checkProjectScroll(projectScrollEvent);
		checkProjectScroll(projectScrollEvent)();
		window.addEventListener('scroll', projectScrollEvent.func);
		SetModal();
  });

	return(
		<React.Fragment>
			<section id="projects" className="bg-color-primary-light">
				<h2 className="projects__h2 color-primary projects-hidden"
					data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayTime": 250 }'>Check Out Some Of My
					Projects</h2>
				<div className="projects__wrapper projects-hidden">
					{/* <Query query={PROJECT_QUERY}>
						{({ data: { projects } }) => {
							// {projects.map(project => <ProjectModal project={project} /> )}
							projects.map(ele => <p>{ele.title}</p>)
						}}
					</Query> */}
					{projects.map(project => <ProjectIcon project={project} />)}
					{/* <div className="projects-hidden-div"
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
					</div> */}
				</div>
			</section>
			{projects.map(project => <ProjectModal project={project} />)}
			
			{/* <div id="pokemon" class="modal">
				<div class="modal__content">
					<div class="modal__content__header" >
						<h2>Gotta TCG</h2>
					</div>
					<div class="modal__content__body" >
						<img class="modal__content__body__image" src="assets/images/m_ptcg-min.jpg" alt="PTCG Image" />
						<div class="modal__content__body__tech" >
							<div>
								<img class="modal__content__body__codeImage" src="assets/images/coding-icon.svg" alt="Coding sign" height="50px" width="50px" />
							</div>
							<div class="color-primary-lightest modal__content__body__tech__description" >
								<h3>Pokemon trading card game collection manage and deck builder</h3>
								<p>Technologies used: NodeJS, ReactJS, Redux, MongoDB, Python</p>
							</div>
						</div>
					</div>
					<div class="modal__content__footer" >
						<a href="http://blog.adanconstanzo.com/blog/project_gtcg" target="_blank" >Check out the blog post</a>
					</div>
				</div>
			</div>
			<div id="jello" class="modal">
				<div class="modal__content">
					<div class="modal__content__header" >
						<h2>Jell0</h2>
					</div>
					<div class="modal__content__body" >
						<img class="modal__content__body__image" src="assets/images/jello-min.jpg" alt="PTCG Image" />
						<div class="modal__content__body__tech" >
							<div>
								<img class="modal__content__body__codeImage" src="assets/images/coding-icon.svg" alt="Coding sign" height="50px" width="50px" />
							</div>
							<div class="color-primary-lightest modal__content__body__tech__description" >
								<h3>A LA Hackathon puzzle grid based game constructed in 36 hours.</h3>
								<p>Technologies used: Javascript, CSS3</p>
							</div>
						</div>
					</div>
					<div class="modal__content__footer" >
						<a href="http://projects.jell0.adanconstanzo.com/" target="_blank" >Check out the live site</a>
						<a href="http://blog.adanconstanzo.com/blog/projects_jell0" target="_blank"  >Check out the blog post</a>
					</div>
				</div>	
			</div>
			<div id="dijkstra" class="modal">
				<div class="modal__content">
					<div class="modal__content__header" >
						<h2>Dijkstra's Airports</h2>
					</div>
					<div class="modal__content__body" >
						<img class="modal__content__body__image" src="assets/images/m_disjkstra-min.jpg" alt="Dijkstra Mpas Image" />
						<div class="modal__content__body__tech" >
							<div>
								<img class="modal__content__body__codeImage" src="assets/images/coding-icon.svg" alt="Coding sign" height="50px" width="50px" />
							</div>
							<div class="color-primary-lightest modal__content__body__tech__description" >
								<h3>Dijkstra's Algorithm to find the shortest path between two airports.</h3>
								<p>Technologies Used: NodeJS, AngularJS, MongoDB, JavaScript</p>
							</div>
						</div>
					</div>
					<div class="modal__content__footer" >
						<a href="http://projects.dijkstra.adanconstanzo.com/#/" target="_blank" >Check out the live site</a>
						<a href="http://blog.adanconstanzo.com/blog/projects_dijkstra" target="_blank" >Check out the blog post</a>
					</div>
				</div>	
			</div>
			<div id="song" class="modal">
				<div class="modal__content">
					<div class="modal__content__header" >
						<h2>Music Guessing Game</h2>
					</div>
					<div class="modal__content__body" >
						<img class="modal__content__body__image" src="assets/images/m_song_app-min.jpg" alt="Music Guessing Game" />
						<div class="modal__content__body__tech" >
							<div>
								<img class="modal__content__body__codeImage" src="assets/images/coding-icon.svg" alt="Coding sign" height="50px" width="50px" />
							</div>
							<div class="color-primary-lightest modal__content__body__tech__description" >
								<h3>A small music guessing game with an audio visualizer and heatlh system.</h3>
								<p>Technologies Used: AngularJS, Web Audio API, ProcessingJS, JavaScript, jQuery</p>
							</div>
						</div>
					</div>
					<div class="modal__content__footer" >
						<a href="http://projects.songapp.adanconstanzo.com/" target="_blank" >Check out the live site</a>
						<a href="http://blog.adanconstanzo.com/blog/project_song_guessing_game" target="_blank" >Check out the blog post</a>
					</div>
				</div>
			</div> */}
		</React.Fragment>
	)
	}

export default Projects;