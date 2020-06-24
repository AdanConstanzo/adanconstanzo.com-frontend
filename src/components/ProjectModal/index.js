// Libraries
import React from 'react';

const ProjectModal = ({ project }) => {
	const modalImage = process.env.NODE_ENV !== "development"
		? project.modalImage.url
		: process.env.REACT_APP_BACKEND_URL + project.modalImage.url;
	return (
		<div id={project.modalId} class="modal">
			<div class="modal__content">
				<div class="modal__content__header" >
					<h2>{project.title}</h2>
				</div>
				<div class="modal__content__body" >
					<img class="modal__content__body__image" src={modalImage} alt={project.title} />
					<div class="modal__content__body__tech" >
						<div>
							<img class="modal__content__body__codeImage" src="assets/images/coding-icon.svg" alt="Coding sign" height="50px" width="50px" />
						</div>
						<div class="color-primary-lightest modal__content__body__tech__description" >
							<h3>{project.modalDescription}</h3>
							<p>{project.modalTech}</p>
						</div>
					</div>
				</div>
				<div class="modal__content__footer" >
					<a href="http://projects.jell0.adanconstanzo.com/" target="_blank" >Check out the live site</a>
					<a href="http://blog.adanconstanzo.com/blog/projects_jell0" target="_blank"  >Check out the blog post</a>
				</div>
			</div>	
		</div>
	);
}
export default ProjectModal;