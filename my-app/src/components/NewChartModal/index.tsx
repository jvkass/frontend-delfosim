import Modal from 'react-modal';
import styles from './styles.module.scss';

export function NewChartModal(){
    

    return(
        <Modal
            isOpen={true}
            overlayClassName={styles.reactModalOverlay}
            className={styles.reactModalContent}
        >
            <form className={styles.Container}>
                <h2>MODAL</h2>
            </form>
        </Modal>
    )
}