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
			technologies
			header
			description
			subHeader
			imageOfMe {
				url
			}
			Resume {
				url
			}
			resumeText
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
			BlogPost {
        id
      }
			modalDescription
			modalTech
			modalId
		}
		projectContent {
			projectTitle
			projectPageLinkText
		}
		blogContent {
      blogTitle
    }
	}
`;

export default PROJECTS_QUERY;