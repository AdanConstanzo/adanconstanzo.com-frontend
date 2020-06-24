import gql from "graphql-tag";

const HEADER_QUERY = gql`
	query HomeHeader {
		homeHeader {
			name
			title
			coverImage{
				url
			}
		}
	}
`;

export default HEADER_QUERY;