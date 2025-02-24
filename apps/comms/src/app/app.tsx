// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import * as React from 'react';
import { useAuth } from '@acme/core';

export function App() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <h1>
          Hello {user?.name}&nbsp;{user?.lastName}
        </h1>
      ) : (
        <h1>please login through venues module</h1>
      )}
    </div>
  );
}

export default App;
