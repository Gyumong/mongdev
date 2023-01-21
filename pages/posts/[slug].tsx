import PostLayout from "@/components/Layouts/PostLayout";
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostPage = ({ post }: { post: Post }) => {
  return <PostLayout post={post} />;
};

export default PostPage;
