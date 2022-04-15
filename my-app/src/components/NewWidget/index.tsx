import styles from './styles.module.scss';
import {FiPlus} from 'react-icons/fi';

export function NewWidget(){
    return(
        <div className={styles.WidgetContainer}>
            <button> 
                <FiPlus size={30}/> 
            </button>
        </div>
    )
}