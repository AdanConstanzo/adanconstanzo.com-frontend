import gql from 'graphql-tag';

const GALLERY_QUERY = gql`
	query mapEvent ($id: ID!) {
		mapEvent (id: $id) {
			type
			Gallery {
				ext
				hash
				url
			}
		}
	}
`;

export default GALLERY_QUERY;