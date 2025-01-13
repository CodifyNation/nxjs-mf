import { version } from '../../package.json';
import styles from './ui.module.css';


export function Ui() {
  return (
    <div className={styles['ui']}>
      <code>@acme/ui@v{version} new version</code>
    </div>
  );
}

export default Ui;
