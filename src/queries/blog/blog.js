import gql from 'graphql-tag';

const BLOG_QUERY = gql`
	query Blog ($id: ID!) {
		blog (id: $id) {
			title
			description
			blog
			coverImage {
				url
			}
			header {
				url
			}
		}
	}
`;

export default BLOG_QUERY;