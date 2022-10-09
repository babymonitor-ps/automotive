import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import { TrendingPostWrapper, PostTitle } from './trending-post.style';

interface TrendingPostProps {
	image?: any;
	title: string;
	url: string;
	tags?: [];
	className?: string;
	placeholderBG?: string;
}

const TrendingPost: React.FunctionComponent<TrendingPostProps> = ({
	image,
	title,
	url,
	tags,
	className,
	placeholderBG,
	...props
}) => {
	// Add all classs to an array
	const addAllClasses = ['trending_post'];

	// className prop checking
	if (className) {
		addAllClasses.push(className);
	}

	return (
		<TrendingPostWrapper className={addAllClasses.join(' ')} {...props}>
			<PostTitle className='post_title'>
				<Link to={url}>{title}</Link>
			</PostTitle>
		</TrendingPostWrapper>
	);
};

export default TrendingPost;
