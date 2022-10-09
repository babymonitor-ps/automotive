import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import GatsbyImage from '../gatsby-image';

import {
  Button,
  PostSlideCardWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  ReadMore,
  Excerpt,
} from './post-slide-card.style';
interface PostSlideCardProps {
  image?: any;
  title: string;
  description?: string;
  url: string;
  tags?: [];
  className?: string;
}

const PostSlideCard: React.FunctionComponent<PostSlideCardProps> = ({
  image,
  title,
  description,
  url,
  tags,
  className,
  ...props
}) => {
  const addClass = ['featured_card'];

  if (className) {
    addClass.push(className);
  }

  return (
    <PostSlideCardWrapper className={addClass.join(' ')} {...props}>
      <PostPreview className='post_preview'>
        <GatsbyImage src={image} alt='post preview' backgroundColor='#EAE8E9'/>
      </PostPreview>

      <PostDetails className='post_details'>
        <PostTitle className='post_title'>
          <Link to={url}>{title}</Link>
        </PostTitle>

        {description && (
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            className='excerpt'
          />
        )}

        <ReadMore className='read_more'>
          <Link to={url}>
            <Button title='Read More' type='submit' />
          </Link>
        </ReadMore>
      </PostDetails>
    </PostSlideCardWrapper>
  );
};

export default PostSlideCard;
