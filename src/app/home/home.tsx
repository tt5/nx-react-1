import { Banner } from '@first/shared/ui';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
      <Banner />
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
