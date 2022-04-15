import styles from './styles.module.scss';
import { Charts } from '../Charts';
import { NewWidget } from '../NewWidget';
import { useChart } from '../../hooks/useCharts';

interface DashboardProps {
    onOpenNewChartModal: () => void;
}

export function Dashboard({ onOpenNewChartModal }: DashboardProps) {
    const { charts } = useChart();

    return (
        <div className={styles.dashboardContainer}>
            { charts.map(chart =>(
                <Charts id={chart.id} title={chart.title}/>
            ))}
            <NewWidget isOpenNewChartModal={onOpenNewChartModal} />
        </div>
    )
}