import gql from 'graphql-tag';

const BOOKS_QUERY = gql`
	query Book ($id: ID!) {
		book(id:$id) {
			id
			status
			blog
			title
			coverImage{
				url
			}
			header {
				url
			}
		}
	}
`;

export default BOOKS_QUERY;