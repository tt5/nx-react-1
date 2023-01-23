import { Banner } from '@first/shared/ui';
import { NavLink, Outlet } from 'react-router-dom';

export function Nav() {
  return (
    <>
      <header className="px-4 py-2 flex bg-blue-600 text-white justify-between">
        <Banner />
        <nav className="flex gap-4 w-20">
          <NavLink className="active:bg-blue-200" to="/">Home</NavLink>
          <NavLink className="active:bg-blue-200" to="/about">About</NavLink>
          <NavLink className="active:bg-blue-200" to="/help">Help</NavLink>
          <NavLink className="active:bg-blue-200" to="/blog">Blog</NavLink>
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
