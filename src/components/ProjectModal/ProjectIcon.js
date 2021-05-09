import React from 'react';
import { FormatUrlSrc } from '../../utils/index';

const ProjectIcon = ({ project }) => (
	<div className="projects-hidden-div"
		data-modal={project.modalId}
		data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 350 }'>
		<img src={FormatUrlSrc(project.coverImage.url)} alt={project.title} />
	</div>
);

export default ProjectIcon;