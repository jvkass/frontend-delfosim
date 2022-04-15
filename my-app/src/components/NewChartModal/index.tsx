import Modal from 'react-modal';
import styles from './styles.module.scss';
import {FiX} from 'react-icons/fi';

interface NewTransactionModalProps {
    IsOpen: boolean;
    IsRequestClose:() => void;
}

export function NewChartModal({IsOpen, IsRequestClose}:NewTransactionModalProps) {


    return (
        <Modal
            isOpen={IsOpen}
            overlayClassName={styles.reactModalOverlay}
            className={styles.reactModalContent}
        >
            <form className={styles.Container}>
                <button type="button"
                    onClick={IsRequestClose}
                    className={styles.reactModalClose}>
                    <FiX/>
                </button>
                <h2>MODAL</h2>
            </form>
        </Modal>
    )
}