// Libraries
import React from 'react';
// Components
import ProjectIcon from '../ProjectModal/ProjectIcon';
import ProjectModal from '../ProjectModal';
// Component
const Projects = ({ projects }) => (
	<React.Fragment>
		<section id="projects" className="bg-color-primary-light">
			<h2 className="projects__h2 color-primary projects-hidden"
				data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayTime": 250 }'>Check Out Some Of My
				Projects</h2>
			<div className="projects__wrapper projects-hidden">
				{projects.map(project => <ProjectIcon key={project.modalId} project={project} />)}
			</div>
		</section>
		{projects.map(project => <ProjectModal key={project.modalId} project={project} />)}
	</React.Fragment>
);

export default Projects;