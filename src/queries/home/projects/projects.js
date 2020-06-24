import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
	query Projects {
		projects {
			title
			coverImage {
				url
			}
			modalImage {
				url
			}
			modalDescription
			modalTech
			modalId
			liveSite
      blogPost
		}
	}
`;

export default PROJECTS_QUERY;