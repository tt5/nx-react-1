import { useLoaderData, useParams } from 'react-router-dom';
import styles from './post.module.css';

/* eslint-disable-next-line */
export interface PostProps {}

export function Post(props: PostProps) {
  const { id } = useParams()
  const post: any = useLoaderData()
  return (
    <div className={styles['container']}>
      <h2>{post.title}</h2>
    </div>
  );
}

export const postLoader = async ({params}: any) => {
  const {id} = params

  const res = await fetch('/posts?id=' + id)
  return res.json()
  
}

export default Post;
