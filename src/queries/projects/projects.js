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
		}
	}
`;

export default PROJECTS_QUERY;