import gql from "graphql-tag";

const FOOTER_QUERY = gql`
	query Footers {
		footers {
			link
			text
			icon{
				url
			}
		}
	}
`;

export default FOOTER_QUERY;