import { Link, useRouteError } from 'react-router-dom';
import styles from './error.module.css';

/* eslint-disable-next-line */
export interface ErrorProps {}

export function Error(props: ErrorProps) {
  const error = useRouteError() as any

  return (
    <div className={styles['container']}>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">home</Link>
    </div>
  );
}

export default Error;
