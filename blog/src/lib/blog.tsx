import styles from './blog.module.css';
import { Outlet } from "react-router-dom";

/* eslint-disable-next-line */
export interface BlogProps {}

export function Blog(props: BlogProps) {
  return (
  <>
    <div className={styles['container']}>
      <h1>Welcome to Blog!</h1>
    </div>
    <Outlet />
    </>
  );
}

export default Blog;
