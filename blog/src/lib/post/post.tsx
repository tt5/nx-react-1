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

  const resjson = await res.json().catch(e => {
    throw Error('Could not find post')
  })

  return resjson
  
}

export default Post;
