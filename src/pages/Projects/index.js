import React, { useEffect } from "react";
import Query from "../../components/Query";
import PROJECT_QUERY from "../../queries/project/projects";
import FOOTER_QUERY from "../../queries/footer";
import ProjectIcon from '../../components/ProjectModal/ProjectIcon';
import ProjectModal from '../../components/ProjectModal';
import InitClickModal from '../../scripts/modal';
import { BlogFooter } from '../../components/Footer';
import { IsMobile } from '../../utils/index';

const Blogs = () => {
	useEffect(() => {
		if (!IsMobile()) {
			document.body.classList.add('non-mobile');
		}
    document.body.classList.add('bg-color-primary-light');
	}, []);
  return (
		<div className="archive no-padding" >
			<div className="header no-margin bg-color-primary" >
				<h1>Here are MORE of my projects :)</h1>
			</div>
      <Query query={PROJECT_QUERY}>
					{({ data: { projects } }) => {
						setTimeout(() => {
							InitClickModal('.projects-div');
						}, 100);
						return(
							<React.Fragment>
								<section id="projects" className="bg-color-primary">
									<div className="projects__wrapper">
										{projects.map(project => <ProjectIcon key={project.modalId} project={project} />)}
									</div>
								</section>
								{projects.map(project => <ProjectModal key={project.modalId} project={project} />)}
							</React.Fragment>
						);
					}
					}
				</Query>
				<Query query={FOOTER_QUERY}>
					{({ data: { footers } }) =>
					<div className="bg-color-primary">
						<BlogFooter />
					</div>}
				</Query>
		</div>
  );
};



export default Blogs;