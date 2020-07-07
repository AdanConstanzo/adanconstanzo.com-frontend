import gql from "graphql-tag";

const MAP_EVENT_QUERY = gql`
	query MapEvent {
		mapEvents {
			id
			latitude
			longitude
			popUpImage {
				url
			}
			name
			city
			description
		}
		mapIcon {
			hiking {
				url
			}
		}
	}
`;

export default MAP_EVENT_QUERY;