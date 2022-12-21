import { Nav } from '@first/shared/ui';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <>
      <Nav>
        <Link className="font-bold no-underline" to="/">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
      Home
    </>
  );
}

export default Home;
