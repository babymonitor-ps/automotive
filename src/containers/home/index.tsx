import * as React from "react";
import RomanticBlogWrapper from "./style";
import Posts from "./posts";
import FeaturedPosts from "./featured-post";
import Banner from "./banner";

type RomanticBlogProps = {};

const RomanticBlog: React.FunctionComponent<RomanticBlogProps> = (props) => {
	return (
		<RomanticBlogWrapper {...props}>
			<Banner />
			<FeaturedPosts />
			<Posts />
		</RomanticBlogWrapper>
	);
};

export default RomanticBlog;
