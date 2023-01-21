import { allPosts } from "@/.contentlayer/generated";
import PostCard from "@/components/Post/PostCard";
import { compareDesc } from "date-fns";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article>
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </article>
  );
}

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
