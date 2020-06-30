import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
	query Home {
		blogs (limit: 3) {
			title
			id
			subTitle
			description
			coverImage{
				url
			}
		}
		footers (limit: 3) {
			link
			text
			icon{
				url
			}
		}
		homeHeader {
			name
			title
			coverImage{
				url
			}
		}
		homeAboutMe {
			header
			description
			subHeader
			imageOfMe {
				url
			}
		}
		projects {
			title
			coverImage {
				url
			}
			modalImage {
				url
			}
			liveSite
			blogPost
			modalDescription
			modalTech
			modalId
		}
	}
`;

export default PROJECTS_QUERY;