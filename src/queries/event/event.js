
import gql from 'graphql-tag';

const EVENT_QUERY = gql`
	query mapEvent ($id: ID!) {
		mapEvent (id: $id) {
			type
			header {
				url
			}
			blog
			name
			city
			state
			description
			starRating
		}
	}
`;

export default EVENT_QUERY;