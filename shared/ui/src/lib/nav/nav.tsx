import { Banner } from '@first/shared/ui';

/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  return (
    <div className="px-4 py-2 flex bg-blue-600 text-white justify-between">
      <Banner />
      <nav className="flex gap-4 w-20">{props.children}</nav>
      <div></div>
    </div>
  );
}

export default Nav;
