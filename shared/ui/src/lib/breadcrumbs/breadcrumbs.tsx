import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';

/* eslint-disable-next-line */
export interface BreadcrumbsProps {}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const location = useLocation()

  let currentLink: any = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .reverse()
    .map(crumb => {
      currentLink =+ `/${crumb}`

      return(
        <div key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className="w-8 flex flex-row-reverse gap-4">
      {crumbs}
    </div>
  );
}

export default Breadcrumbs;
