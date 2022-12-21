import { Nav } from '@first/shared/ui';
import { NavLink } from 'react-router-dom';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Nav>
      About
    </>
  );
}

export default About;
