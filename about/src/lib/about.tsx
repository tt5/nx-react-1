import { Banner } from '@first/shared/ui';
import { Link } from 'react-router-dom';
import styles from './about.module.css';

/* eslint-disable-next-line */
export interface RoutesAboutProps {}

export function RoutesAbout(props: RoutesAboutProps) {
  return (
    <div className={styles['container']}>
      <Banner />
      <Link to="/">Home</Link>
    </div>
  );
}

export default RoutesAbout;
