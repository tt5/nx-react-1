import { Banner } from '@first/shared/ui';

/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  return (
    <div className="px-4 py-2 flex bg-blue-600 text-white justify-between">
      <Banner />
      <div className="flex gap-4 w-20">{props.children}</div>
      <div></div>
    </div>
  );
}

export default Nav;
