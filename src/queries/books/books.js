import gql from 'graphql-tag';

const BOOKS_QUERY = gql`
	query Books {
		books {
			id
			status
			blog
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