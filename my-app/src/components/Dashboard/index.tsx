import styles from './styles.module.scss';
import { Charts } from '../Charts';
import { NewWidget } from '../NewWidget';

interface DashboardProps{
    onOpenNewChartModal: () => void;
}

export function Dashboard({onOpenNewChartModal}:DashboardProps) {

    return (
        <div className={styles.dashboardContainer}>
           <Charts/>
           <NewWidget isOpenNewChartModal={onOpenNewChartModal}/>
        </div>
    )
}