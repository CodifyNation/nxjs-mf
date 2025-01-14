import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Ui } from '@acme/ui';
import styles from './app.module.css';

const Comms = React.lazy(() => import('comms/Module'));

export function App() {
  return (
    <>
      <nav className={styles['nav']}>
        <h1 className={styles['title']}>Acme Inc.</h1>
        <Link className={styles['link']} to="/">
          Home
        </Link>
        <Link className={styles['link']} to="/comms">Comms test is this working</Link>
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
            <Route path="/comms" element={<Comms />} />
          </Routes>
        </main>
      </React.Suspense>
    </>
  );
}

export default App;
