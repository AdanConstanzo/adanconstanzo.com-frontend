import React from 'react';
import ProjectIcon from '../ProjectModalHidden/ProjectIcon';
import ProjectModal from '../ProjectModalHidden';

const Projects = ({ projects }) => {

	// Selecting four projects from out projects array.
	let tempProjects = [...projects];
	let fourProjects = [];
	// Making these required to be shown.
	let requiredModalId = ["eventMap"];
	for (let i = 0; i < tempProjects.length; i++) {
		if (requiredModalId.includes(tempProjects[i].modalId)) {
			fourProjects.push(projects[i]);
			tempProjects.splice(i, 1);
			i--;
		}
	}

	while (fourProjects.length < 4) {
		var randomProjectIndex = Math.floor(Math.random() * tempProjects.length);
		fourProjects.push(tempProjects[randomProjectIndex]);
		tempProjects.splice(randomProjectIndex, 1);
	}

	return (
		<React.Fragment>
			<section id="projects" className="bg-color-primary-light">
				<h2 className="projects__h2 color-primary projects-hidden"
					data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayTime": 250 }'>
					<a className="color-primary" target="_blank" rel="noopener noreferrer" href="/projects">Check Out Some Of My Projects</a>
				</h2>
				<div className="projects__wrapper projects-hidden">
					{fourProjects.map(project => <ProjectIcon key={project.modalId} project={project} />)}
				</div>
			</section>
			{fourProjects.map(project => <ProjectModal key={project.modalId} project={project} />)}
		</React.Fragment>
	);
}

export default Projects;