import styles from './help.module.css';
import { NavLink, Outlet } from "react-router-dom";

/* eslint-disable-next-line */
export interface HelpProps {}

export function Help(props: HelpProps) {
  return (
    <div className={styles['container']}>
      <h1>help</h1>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Me</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Help;
