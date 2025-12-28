import { Box, Heading, PageBlock } from '@cutting/component-library';
import { Image } from '@unpic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

type PostData = {
  frontmatter: {
    meta?: {
      title: string;
      image?: string;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  html: string;
};

export default function PostRoute(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    if (slug) {
      fetch(`/posts/${slug}.json`)
        .then((res) => res.json())
        .then((data) => setPostData(data))
        .catch(console.error);
    }
  }, [slug]);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <Box style={{ marginTop: '6rem' }} className="post">
      <PageBlock>
        <Box marginBottom="large">
          <Heading level="1">{postData.frontmatter.meta?.title}</Heading>
        </Box>
        {postData.frontmatter.meta?.image && (
          <Box marginBottom="large">
            <Image
              src={postData.frontmatter.meta.image}
              width={600}
              height={400}
              layout="constrained"
              alt={postData.frontmatter.meta.title}
            />
          </Box>
        )}
        <Box
          paddingX={{ mobile: 'small', desktop: 'none' }}
          className="post-content"
          dangerouslySetInnerHTML={{ __html: postData.html }}
        />
      </PageBlock>
    </Box>
  );
}
