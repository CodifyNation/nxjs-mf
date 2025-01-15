// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import * as React from 'react';
import { Suspense } from 'react';
import { useAuth } from '@acme/core';
import Hello from '@acme/hello';


export function App() {

  const test = useAuth()

  console.log(test)

  return (
    <div>
        <Hello label="comms module itself"/>
        user is logged in test: {test.isLoggedIn}
      <NxWelcome title="comms" />
    </div>
  );
}

export default App;
