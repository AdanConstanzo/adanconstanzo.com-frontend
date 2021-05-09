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
			state
			description
			starRating
			showRating
			showBlog
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
			pointOfInterest {
				url
				width
				height
			}
		}
	}
`;

export default MAP_EVENT_QUERY;