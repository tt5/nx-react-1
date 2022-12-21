import { Nav } from '@first/shared/ui';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link className="no-underline font-bold" to="/about">About</Link>
      </Nav>
      <Link to="/">About</Link>
    </>
  );
}

export default About;
