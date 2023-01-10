import { Banner } from '@first/shared/ui';
import { NavLink, Outlet } from 'react-router-dom';

export function Nav() {
  return (
    <>
      <header className="px-4 py-2 flex bg-blue-600 text-white justify-between">
        <Banner />
        <nav className="flex gap-4 w-20">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <div></div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
