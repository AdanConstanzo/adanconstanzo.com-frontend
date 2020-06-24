import gql from "graphql-tag";

const ABOUT_ME_QUERY = gql`
	query HomeAboutMe {
		homeAboutMe {
			header
			description
			subHeader
			imageOfMe {
				url
			}
		}
	}
`;

export default ABOUT_ME_QUERY;