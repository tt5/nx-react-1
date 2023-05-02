import { Banner, Breadcrumbs } from '@first/shared/ui';
import { NavLink, Outlet } from 'react-router-dom';

export function Nav() {
  return (
    <>
      <header className="font-a font-bold px-4 py-2 flex bg-a-a text-yellow-50 justify-between">
        <Banner />
        <nav className="flex gap-4 w-20">
          <NavLink className="active:bg-blue-200" to="/">
            Home
          </NavLink>
          <NavLink className="active:bg-blue-200" to="/about">
            About
          </NavLink>
          <NavLink className="active:bg-blue-200" to="/help">
            Help
          </NavLink>
          <NavLink className="active:bg-blue-200" to="/blog">
            Blog
          </NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main className="font-a p-4">
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
