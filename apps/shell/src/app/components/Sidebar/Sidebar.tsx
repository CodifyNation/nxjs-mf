import classes from './Sidebar.module.scss';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const delayedImport = (importPromise: unknown, delay = 2000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(importPromise);
    }, delay);
  });

// @ts-ignore
const MenuItemComms = lazy(() => delayedImport(import('comms/menuItem')));
// @ts-ignore
const MenuItemVenues = lazy(() => delayedImport(import('venues/menuItem'), 4000));

export const Sidebar = () => {
  return (
    <div className={classes.root}>
      <aside className={classes.panel}>
        <div style={{ color: 'white' }}>User info</div>
        <nav>
          <ul className={classes.navRoot}>
            <li className={classes.navItem}>
              <Link to="/">Home</Link>
            </li>
            <Suspense fallback={<p style={{ color: 'white' }}>...loading</p>}>
              <li className={classes.navItem}>
                <MenuItemComms label="Comms" />
              </li>
            </Suspense>
            <Suspense fallback={<p style={{ color: 'white' }}>...loading</p>}>
              <li className={classes.navItem}>
                <MenuItemVenues label="Venues" />
              </li>
            </Suspense>
          </ul>
        </nav>
      </aside>
    </div>
  );
};
