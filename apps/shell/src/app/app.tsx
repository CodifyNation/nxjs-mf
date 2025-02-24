import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import { AuthProvider } from '@acme/core';
import { Sidebar } from './components/Sidebar/Sidebar';

const Comms = lazy(() => import('comms/Module'));

const Venues = lazy(() => import('venues/Module'));

export function App() {
  return (
    <AuthProvider>
      <div className={styles.root}>
        <Sidebar />
        <Suspense fallback={<p>LOADING some components</p>}>
          <main className={styles.content}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1>Home</h1>
                    <span>Hello from the Host app</span>
                  </>
                }
              />
              <Route
                path="/venues"
                element={
                  <div>
                    <Venues />
                  </div>
                }
              />
              <Route
                path="/comms"
                element={
                  <div>
                    <Comms />
                  </div>
                }
              />
            </Routes>
          </main>
        </Suspense>
      </div>
    </AuthProvider>
  );
}

export default App;
