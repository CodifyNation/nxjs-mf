import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import hello from '@acme/hello';



export function App() {
  return (
    <div>
      testing this shell app needs restart
      {hello()}
    </div>
  );
}

export default App;
