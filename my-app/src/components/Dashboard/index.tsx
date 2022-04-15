import styles from './styles.module.scss';
import { Charts } from '../Charts';

export function Dashboard() {

    return (
        <div className={styles.dashboardContainer}>
           <Charts/>
        </div>
    )
}