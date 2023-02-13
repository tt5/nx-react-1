import { useLoaderData, Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface PostsProps {}

export function Posts(props: PostsProps) {
  const posts: any = useLoaderData()

  return (
    <div className="flex flex-col">
      {posts.posts.map((post: any) => (
        <Link className="underline" to={post.id.toString()} key={post.id}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}

export const postsLoader = async () => {
  const res = await fetch('/posts')

  return res.json()
}
