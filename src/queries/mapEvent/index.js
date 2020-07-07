import gql from "graphql-tag";

const MAP_EVENT_QUERY = gql`
	query MapEvent {
		mapEvents {
			id
			type
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
			hike {
				url
				width
				height
			}
			cruise {
				url
				width
				height
			}
			food {
				url
				width
				height
			}
			trip {
				url
				width
				height
			}
		}
	}
`;

export default MAP_EVENT_QUERY;