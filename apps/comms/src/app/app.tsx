// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import * as React from 'react';
import { Suspense } from 'react';
import { useAuth } from '@acme/core';
import Hello from '@acme/hello';
import { Ui } from '@acme/ui';

export function App() {
  const test = useAuth();

  console.log(test);

  return (
    <div>
      <Ui />
      <h1>
        User is Currently: {test.isLoggedIn ? 'Logged IN' : 'logged OUT'}
      </h1>
      <Hello label="comms module itself" />
      <NxWelcome title="comms" />
    </div>
  );
}

export default App;
