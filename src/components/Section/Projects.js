// Libraries
import React, { useEffect } from 'react';
// Components
import ProjectIcon from '../ProjectModal/ProjectIcon';
import ProjectModal from '../ProjectModal';
// Utility 
import { checkProjectScroll } from '../../scripts/utils';
// Scripts
import SetModal from '../../scripts/modal';
import SetNav from '../../scripts/nav';
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
		SetNav('projects');
  });

	return(
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
	)
	}

export default Projects;