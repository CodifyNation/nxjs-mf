import { version } from '../../package.json';
import styles from './ui.module.css';


const a = 5;

export function Ui() {
  return (
    <div className={styles['ui']}>
      <code>@acme/ui@v{version} new version</code>
    </div>
  );
}

export default Ui;
