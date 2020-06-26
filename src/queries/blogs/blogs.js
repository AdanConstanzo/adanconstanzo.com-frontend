import gql from 'graphql-tag';

const BLOG_QUERY = gql`
	query Blogs {
		blogs {
			id
			title
			subTitle
			description
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

export default BLOG_QUERY;