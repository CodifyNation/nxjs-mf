// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import * as React from 'react';
import { Suspense } from 'react';
const Hello = React.lazy(() => import('shell/hello'));

export function App() {

  return (
    <div>
      <Suspense fallback={'loading...'}>
        <Hello label="comms module itself"/>
      </Suspense>
      <NxWelcome title="comms" />
    </div>
  );
}

export default App;
