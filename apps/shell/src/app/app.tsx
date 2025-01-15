import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Ui } from '@acme/ui';
import styles from './app.module.css';
import { AuthProvider } from '@acme/core';



const Comms = lazy(() => import('comms/Module'));

const Venues = lazy(() => import('venues/Module'));


const delayedImport = (importPromise: unknown, delay = 2000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(importPromise);
    }, delay);
  });

// @ts-ignore
//const Hello = lazy(() => delayedImport(import('comms/hello')));

export function App() {
  return (
    <AuthProvider>
    <>
      <nav className={styles['nav']}>
        <h1 className={styles['title']}>Testing MicroFrontends</h1>
        <Link className={styles['link']} to="/">
          Home
        </Link>
        <Link to="/venues">Venues</Link>
        <Link className={styles['link']} to="/comms">
          Comms test is this working
        </Link>
       {/* <Hello label="this is rounter"/>*/}
      </nav>
      <Suspense fallback={<p>LOADING some components</p>}>
        <main className={styles['outlet']}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Home</h1>
                  <Ui />
                  some other things
                </>
              }
            />
            <Route path="/venues" element={<div><Venues /></div>} />
            <Route path="/comms" element={<div><Comms /></div>} />
          </Routes>
        </main>
      </Suspense>
    </>
    </AuthProvider>
  );
}

export default App;
