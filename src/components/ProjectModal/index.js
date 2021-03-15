// Libraries
import React from 'react';
// Assets
import CodingIcon from '../../assets/images/coding-icon.svg';
//Component
const ProjectModal = ({ project }) => {
	const modalImage = process.env.NODE_ENV !== "development"
		? `https://api.adanconstanzo.com${project.modalImage.url}`
		: process.env.REACT_APP_BACKEND_URL + project.modalImage.url;
	return (
		<div id={project.modalId} className="modal">
			<div className="modal__content">
				<div className="modal__content__header" >
					<h2>{project.title}</h2>
				</div>
				<div className="modal__content__body" >
					<img className="modal__content__body__image" src={modalImage} alt={project.title} />
					<div className="modal__content__body__tech" >
						<div>
							<img className="modal__content__body__codeImage" src={CodingIcon} alt="Coding sign" height="50px" width="50px" />
						</div>
						<div className="color-primary-lightest modal__content__body__tech__description" >
							<h3>{project.modalDescription}</h3>
							<p>{project.modalTech}</p>
						</div>
					</div>
				</div>
				<div className="modal__content__footer" >
					{project.liveSite && <a href={project.liveSite} target="_blank" rel="noopener noreferrer" >Check out the live site</a> }
					{project.BlogPost && <a href={`/blog/${project.BlogPost.id}`} target="_blank" rel="noopener noreferrer"  >Check out the blog post</a> }
				</div>
			</div>	
		</div>
	);
}
export default ProjectModal;