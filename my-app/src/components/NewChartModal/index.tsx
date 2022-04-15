import Modal from 'react-modal';
import styles from './styles.module.scss';
import {FiX} from 'react-icons/fi';
import { FormEvent, useState } from 'react';

interface NewChartModalProps {
    IsOpen: boolean;
    IsRequestClose:() => void;
}

export function NewChartModal({IsOpen, IsRequestClose}:NewChartModalProps) {

    const [title,setTitle] = useState('');

    async function handleCreateNewChart(event: FormEvent){
        event.preventDefault(); 

        // await createChart({
        //     title,
        // });

        setTitle('');

        IsRequestClose();
    }


    return (
        <Modal
            isOpen={IsOpen}
            overlayClassName={styles.reactModalOverlay}
            className={styles.reactModalContent}
            onRequestClose={IsRequestClose}
        >
            <form className={styles.Container}>
                <button type="button"
                    onClick={handleCreateNewChart}
                    className={styles.reactModalClose}>
                    <FiX/>
                </button>
                <h2>MODAL</h2>
            </form>
        </Modal>
    )
}