import gql from "graphql-tag";

const MAP_HIKE_ROUTE = gql`
	query mapEvent ($id: ID!) {
		mapEvent (id: $id) {	
			routeCoordinates
		}
	}
`;

export default MAP_HIKE_ROUTE;