import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const PostCard = (post: Post) => {
  return (
    <>
      <h1 className="title-26">{post.title}</h1>
      <div className="flex flex-col body-16">
        <time dateTime={post.date} className="text-sm text-slate-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h2 className="text-lg">
          <Link href={post.url} className="text-blue-700 hover:text-blue-900 ">
            {post.title}
          </Link>
        </h2>
      </div>
    </>
  );
};

export default PostCard;
