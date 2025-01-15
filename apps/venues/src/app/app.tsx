// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { useAuth } from '@acme/core';

export function App() {
  const { setLoggedINState } = useAuth()
  return (
    <div>
      <button onClick={() => {
        setLoggedINState(true)
      }
      }>log in
      </button>
      <NxWelcome title="venues" />
    </div>
  );
}

export default App;
