import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../containers/layout";
import RomanticBlog from "../containers/home";
import SEO from "../components/seo";

interface IndexPageProps extends PageProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
				description: string;
				tagLine: string;
			};
		};
	};
}
export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
				tagLine
			}
		}
	}
`;
const IndexPage: React.FC<IndexPageProps> = (props) => {
	const { data } = props;

	return (
		<Layout>
			<SEO
				title={data.site.siteMetadata.title}
				tagLine={data.site.siteMetadata.tagLine}
				description={data.site.siteMetadata.description}
				isHome={true}
			/>
			<RomanticBlog />
		</Layout>
	);
};

export default IndexPage;
