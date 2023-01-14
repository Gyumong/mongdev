import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { Inter } from "@next/font/google";
import { allPosts, Post } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";

const inter = Inter({ subsets: ["latin"] });

function PostCard(post: Post) {
  return (
    <div className="flex flex-col">
      <time dateTime={post.date} className="text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900">
          {post.title}
        </Link>
      </h2>
    </div>
  );
}

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1>Contentlayer Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}
