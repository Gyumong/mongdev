import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
const PostLayout = ({ post }: { post: Post }) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <article>
      <h1>{post.title}</h1>
      <time dateTime={post.date} className="text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <MDXComponent />
    </article>
  );
};

export default PostLayout;
