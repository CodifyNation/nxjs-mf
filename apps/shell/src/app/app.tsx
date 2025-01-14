import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Ui } from '@acme/ui';
import styles from './app.module.css';


const Comms = React.lazy(() => import('comms/Module'));

const Venues = React.lazy(() => import('venues/Module'));
const Hello = React.lazy(() => import('shell/hello'));

export function App() {
  return (
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
        <Hello label="this is rounter"/>
      </nav>
      <React.Suspense fallback={null}>
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
            <Route path="/venues" element={<div><Hello label="testing shell venues" /><Venues /></div>} />
            <Route path="/comms" element={<div><Hello label="testing shell app" /><Comms /></div>} />
          </Routes>
        </main>
      </React.Suspense>
    </>
  );
}

export default App;
