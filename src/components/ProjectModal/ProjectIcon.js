import React from 'react';
import { FormatUrlSrc } from '../../utils/index';

const ProjectIcon = ({ project }) => (
	<div className="projects-div" data-modal={project.modalId}>
		<img src={FormatUrlSrc(project.coverImage.url)} alt={project.title} />
	</div>
);

export default ProjectIcon;