import classes from './Sidebar.module.scss';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@acme/core';
import { Menu } from '@HE/style-guide';

const delayedImport = (importPromise: unknown, delay = 2000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(importPromise);
    }, delay);
  });

// @ts-ignore
const MenuItemComms = lazy(() => delayedImport(import('comms/menuItem')));

const MenuItemVenues = lazy(() =>
  // @ts-ignore
  delayedImport(import('venues/menuItem'), 4000),
);

export const Sidebar = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <div className={classes.root}>
      <aside className={classes.panel}>
        {isLoggedIn ? (
          <div
            style={{
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ textAlign: 'center' }}>Hello</span>
            <span>
              {user?.name}&nbsp;{user?.lastName}
            </span>
          </div>
        ) : (
          <div style={{ color: 'white' }}>User info</div>
        )}
        <nav>
          <ul className={classes.navRoot}>
            <li className={classes.navItem}>
              <Menu
                items={[
                  {
                    label: 'Home',
                    link: <Link to="/">Home link</Link>,
                    expanded: false,
                  },
                ]}
              />
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
