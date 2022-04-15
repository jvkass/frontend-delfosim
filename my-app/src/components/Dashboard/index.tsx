import styles from './styles.module.scss';
import { Charts } from '../Charts';
import { NewWidget } from '../NewWidget';

export function Dashboard() {

    return (
        <div className={styles.dashboardContainer}>
           <Charts/>
           <NewWidget/>
        </div>
    )
}