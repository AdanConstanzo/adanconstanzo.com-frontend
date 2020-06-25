import gql from "graphql-tag";

const BLOG_QUERY = gql`
	query Blogs {
		blogs {
			title
			subTitle
			description
			url
			coverImage{
				url
			}
		}
	}
`;

export default BLOG_QUERY;