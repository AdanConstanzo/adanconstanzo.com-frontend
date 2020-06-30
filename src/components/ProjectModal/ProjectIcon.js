// Libraries
import React from 'react';

const ProjectIcon = ({ project }) => {
	const coverImage = process.env.NODE_ENV !== "development"
		? `https://api.adanconstanzo.com/${project.coverImage.url}`
		: process.env.REACT_APP_BACKEND_URL + project.coverImage.url;
	return (
		<div className="projects-hidden-div"
			data-modal={project.modalId}
			data-animation='{ "animation": "animation-fadeIn", "delayInit": false, "delayBetween": 350 }'>
			<img src={coverImage} alt={project.title} />
		</div>
	);
}
export default ProjectIcon;